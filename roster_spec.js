var RosterPage = require('../page-objects/roster_page')
var LoginPage = require('../page-objects/login_page') 

describe('Roster Page', function() {
    var rosterPage
    var loginPage

    beforeEach(function() {
        rosterPage = new RosterPage()
        loginPage = new LoginPage()
        browser.ignoreSynchronization = true
        browser.get('https://glitchitsystem.com/superhero/')
    })

    afterEach(function() {

    })

    it('should display all default roster elements', function(){
        loginPage.emailField.sendKeys('tester@glitchitsytem.com')
        loginPage.passwordField.sendKeys('fakepassword')
        loginPage.submitBtn.click()
        
        expect(rosterPage.rosterTitleText.isDisplayed()).toBe(true)
        expect(rosterPage.rosterTitleText.getText()).toEqual('Build Your Superhero Roster:')

        expect(rosterPage.wolverineItemTxt.isDisplayed()).toBe(true);
        expect(rosterPage.wolverineItemTxt.getText()).toEqual('Wolverine')

        expect(rosterPage.ironmanItemTxt.isDisplayed()).toBe(true);
        expect(rosterPage.ironmanItemTxt.getText()).toEqual('Iron Man')

        expect(rosterPage.deadpoolItemTxt.isDisplayed()).toBe(true);
        expect(rosterPage.deadpoolItemTxt.getText()).toEqual('Deadpool')


        expect(rosterPage.ThoritemTxt.isDisplayed()).toBe(true);
        expect(rosterPage.ThoritemTxt.getText()).toEqual('Thor')

        expect(rosterPage.spidermanItemTxt.isDisplayed()).toBe(true);
        expect(rosterPage.spidermanItemTxt.getText()).toEqual('Spider-Man')

        expect(rosterPage.rosterFieldLabel.isDisplayed()).toBe(true);
        expect(rosterPage.rosterFieldLabel.getText()).toEqual('ADD A SUPERHERO')

        expect(rosterPage.rosterField.isDisplayed()).toBe(true);
        expect(rosterPage.sample.isDisplayed()).toBe(true);
    })
    
    it('should add a hero on submit', function(){
        loginPage.emailField.sendKeys('tester@glitchitsytem.com')
        loginPage.passwordField.sendKeys('fakepassword')
        loginPage.submitBtn.click()

        expect(rosterPage.rosterField.isDisplayed()).toBe(true)
    })
})