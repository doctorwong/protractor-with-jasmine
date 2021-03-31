var LoginPage = require("./page-objects/login_page.js")

describe('Login Page Tests', function() {
    var loginPage

    beforeEach(function() {
        loginPage = new LoginPage()

        //use this if testing a non-angular site
        browser.ignoreSynchronization = true

        //Open URL
        browser.get('https://glitchitsystem.com/superhero/')
    })

    afterEach(function() {})

    it('should display all login page elements', function(){
        expect(loginPage.loginTitleText.isDisplayed()).toBe(true);
        expect(loginPage.loginTitleText.getText()).toEqual('Welcome. Please Log In.');
        expect(loginPage.emailFieldLabel.isDisplayed()).toBe(true);
        expect(loginPage.emailField.isDisplayed()).toBe(true);
        expect(loginPage.passwordFieldLabel.isDisplayed()).toBe(true);
        expect(loginPage.passwordField.isDisplayed()).toBe(true);

        expect(loginPage.rememberChkb.isDisplayed()).toBe(true);
        expect(loginPage.rememberChk.isDisplayed()).toBe(true);
        expect(loginPage.rememberChk.isSelected()).toBe(false);
        expect(loginPage.submitBtn.isDisplayed()).toBe(true);
    })
        
    it('should display error message when no username and password entered', function(){
        loginPage.submitBtn.click();
        expect(loginPage.loginErrorMsg.isDisplayed()).toBe(true)
        //expect(loginPage.loginErrorMsg.getText()).toEqual("An e-mail and password are required.")
    })

    it('should display error message when no password entered', function(){
        loginPage.emailField.sendKeys('tester@glitchitsytem.com');
        loginPage.submitBtn.click();
        expect(loginPage.loginErrorMsg.isDisplayed()).toBe(true)
        //expect(loginPage.loginErrorMsg.getText()).toEqual("An e-mail and password are required.")
    })

    it('should display error message when no email entered', function(){
        loginPage.passwordField.sendKeys('fakepassword');
        loginPage.submitBtn.click();
        expect(loginPage.loginErrorMsg.isDisplayed()).toBe(true)
        //expect(loginPage.loginErrorMsg.getText()).toEqual("An e-mail and password are required.")
    })


   it('should log the user in', function() {
        loginPage.emailField.sendKeys('tester@glitchitsytem.com');
        loginPage.passwordField.sendKeys('fakepassword');
        loginPage.submitBtn.click();
   })

    //ToDo - verify the page elements chaged
})
