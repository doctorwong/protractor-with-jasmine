var NavPage = require('./page-objects/nav_page')
var LoginPage = require('./page-objects/login_page')

describe('Header Page Tests', function() {
    var navPage
    var loginPage

    beforeEach(function(){
        navPage = new NavPage();
        loginPage = new LoginPage();

        browser.ignoreSynchronization = true
        browser.get('https://glitchitsystem.com/superhero/')

    })

    afterEach(function(){

    })

    it('should display all Nav elements', function(){
        loginPage.emailField.sendKeys('tester@glitchitsytem.com');
        loginPage.passwordField.sendKeys('fakepassword');
        loginPage.submitBtn.click();

        expect(navPage.homeLink.isDisplayed()).toBe(true)
        expect(navPage.heroFactsLink.isDisplayed()).toBe(true)
        expect(navPage.logoutLink.isDisplayed()).toBe(true)

        navPage.heroFactsLink.click();
        expect(navPage.wolverineOption.isDisplayed()).toBe(true)
        expect(navPage.spidermanOption.isDisplayed()).toBe(true)
    })
    
    it('should display and close wolverine modal', function() {
    loginPage.emailField.sendKeys('tester@glitchitsytem.com')
    loginPage.passwordField.sendKeys('fakepassword')
    loginPage.submitBtn.click()

    navPage.heroFactsLink.click()
    navPage.wolverineOption.click()
    browser.sleep(1000);

    //using toBeTruthy for the popup if isPresent doesn't return true
    expect(navPage.wolverineModalTitle.isPresent()).toBeTruthy()
    expect(navPage.wolverineModalTitle.getText()).toEqual('Wolverine Fact')
    expect(navPage.wolverineModalBody.getText()).toEqual('Wolverine made his first comic book appearance in 1974.')
    expect(navPage.wolverineModalCloseButton.isPresent()).toBeTruthy()
    expect(navPage.wolverineModalXButton.isDisplayed()).toBe(true)
    navPage.wolverineModalCloseButton.click()
    })

    it('should display and close spiderman modal', function() {
    loginPage.emailField.sendKeys('tester@glitchitsytem.com')
    loginPage.passwordField.sendKeys('fakepassword')
    loginPage.submitBtn.click()
    navPage.heroFactsLink.click();
    navPage.spidermanOption.click();
    browser.sleep(1000);

    expect(navPage.spidermanModalTitle.isPresent()).toBeTruthy()
    expect(navPage.spidermanModalTitle.getText()).toEqual('Spider-Man Fact')
    expect(navPage.spidermanModalBody.getText()).toEqual('Spider-man was created by Stan Lee and Steve Ditko and first appeared in 1962.')
    expect(navPage.spidermanModalCloseButton.isDisplayed()).toBe(true)
    expect(navPage.spidermanModalXButton.isDisplayed()).toBe(true)
    navPage.spidermanModalCloseButton.click()

    })

    it('should display screen without email and password after logout', function(){
        loginPage.emailField.sendKeys('tester@glitchitsytem.com')
        loginPage.passwordField.sendKeys('fakepassword')
        loginPage.submitBtn.click()
        navPage.logoutLink.click();
        expect(loginPage.emailField.getText()).toEqual('');
        expect(loginPage.passwordField.getText()).toEqual('')
    })

    it('should display screen with email and password after logout if remember password is checked', function(){
        loginPage.emailField.sendKeys('tester@glitchitsytem.com')
        loginPage.passwordField.sendKeys('fakepassword')
        loginPage.rememberPassword.click()
        loginPage.submitBtn.click()
        navPage.logoutLink.click();
        expect(loginPage.emailField.getAttribute('value')).toEqual('tester@glitchitsytem.com');
        expect(loginPage.passwordField.getAttribute('value')).toEqual('fakepassword')
        expect(loginPage.rememberPassword.isSelected()).toBe(true)
    })

    it('should display alert for no search results found', function() {
        loginPage.emailField.sendKeys('tester@glitchitsytem.com')
        loginPage.passwordField.sendKeys('fakepassword')
        loginPage.rememberPassword.click()
        loginPage.submitBtn.click()

        navPage.searchField.sendKeys('hi')
        navPage.searchButton.click()

        var EC = protractor.ExpectedConditions
        browser.wait(EC.alertIsPresent(), 3000)

        expect(browser.switchTo().alert().getText()).toEqual('Your search for hi returned 0 reults. Try something else.')
        browser.switchTo().alert().accept()
        })

    it('should display alert for search result found', function() {
        loginPage.emailField.sendKeys('tester@glitchitsytem.com')
        loginPage.passwordField.sendKeys('fakepassword')
        loginPage.rememberPassword.click()
        loginPage.submitBtn.click()
    
        navPage.searchField.sendKeys('Wolverine')
        navPage.searchButton.click()
    
        var EC = protractor.ExpectedConditions
        browser.wait(EC.alertIsPresent(), 3000)
    
        expect(browser.switchTo().alert().getText()).toEqual('Wolverine is awesome!')
        browser.switchTo().alert().accept()
        })
    })