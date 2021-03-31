var VotePage = require('../page-objects/vote_page') 
var LoginPage = require('../page-objects/login_page') 



describe('Vote Page', function() {
    var votePage
    var loginPage

    beforeEach(function(){
        votePage = new VotePage()
        loginPage = new LoginPage()
        browser.ignoreSynchronization = true
        browser.get('https://glitchitsystem.com/superhero/')

    })

    afterEach(function() {

    })

    it('should display all elements for the voting section', function(){
        loginPage.emailField.sendKeys('tester@glitchitsytem.com')
        loginPage.passwordField.sendKeys('fakepassword')
        loginPage.submitBtn.click()

        expect(votePage.voteTitleText.isDisplayed()).toBe(true)
        expect(votePage.voteTitleText.getText()).toEqual('Build Your Superhero Roster:')

        expect(votePage.xmenRadioLabel.isDisplayed()).toBe(true)
        expect(votePage.xmenRadioLabel.getText()).toEqual('X-Men')

        expect(votePage.avengersRadioLabel.isDisplayed()).toBe(true)
        expect(votePage.avengersRadioLabel.getText()).toEqual('Avengers')

        expect(votePage.deadPoolRadioLabel.isDisplayed()).toBe(true)
        expect(votePage.deadPoolRadioLabel.getText()).toEqual('Deadpool')

        expect(votePage.spiderManRadioLabel.isDisplayed()).toBe(true)
        expect(votePage.spiderManRadioLabel.getText()).toEqual('Spider-Man Homecoming')

        expect(votePage.ironManRadioLabel.isDisplayed()).toBe(true)
        expect(votePage.ironManRadioLabel.getText()).toEqual('Iron Man')

        expect(votePage.movieLabel.isDisplayed()).toBe(true)
        expect(votePage.movieLabel.getText()).toEqual('Movie')

        expect(votePage.voteLabel.isDisplayed()).toBe(true)
        expect(votePage.voteLabel.getText()).toEqual('Votes')

        expect(votePage.xmenLabel.isDisplayed()).toBe(true)
        expect(votePage.xmenLabel.getText()).toEqual('X-Men')

        expect(votePage.xmenValue.isDisplayed()).toBe(true)
        expect(votePage.xmenValue.getText()).toEqual('10')

        expect(votePage.avengersLabel.isDisplayed()).toBe(true)
        expect(votePage.avengersLabel.getText()).toEqual('Avengers')

        expect(votePage.avengersValue.isDisplayed()).toBe(true)
        expect(votePage.avengersValue.getText()).toEqual('5')

        expect(votePage.deadpoolLabel.isDisplayed()).toBe(true)
        expect(votePage.deadpoolLabel.getText()).toEqual('Deadpool')

        expect(votePage.deadpoolValue.isDisplayed()).toBe(true)
        expect(votePage.deadpoolValue.getText()).toEqual('22')

        expect(votePage.spidermanLabel.isDisplayed()).toBe(true)
        expect(votePage.spidermanLabel.getText()).toEqual('Spider-Man Homecoming')

        expect(votePage.spidermanValue.isDisplayed()).toBe(true)
        expect(votePage.spidermanValue.getText()).toEqual('12')

        expect(votePage.ironManLabel.isDisplayed()).toBe(true)
        expect(votePage.ironManLabel.getText()).toEqual('Iron Man')

        expect(votePage.ironManValue.isDisplayed()).toBe(true)
        expect(votePage.ironManValue.getText()).toEqual('1')


    })

    it('should add 1 to Xmen votes', function()
    {
        loginPage.emailField.sendKeys('tester@glitchitsytem.com')
        loginPage.passwordField.sendKeys('fakepassword')
        loginPage.submitBtn.click()
        expect(votePage.thanksAlertText.isDisplayed()).toBe(false);

        votePage.submitButton.click();
        expect(votePage.xmenValue.getText()).toEqual('11')
        expect(votePage.thanksAlertText.getText()).toEqual('Thanks for voting!');
    })

    it('should add 1 to avengers votes', function()
    {
        loginPage.emailField.sendKeys('tester@glitchitsytem.com')
        loginPage.passwordField.sendKeys('fakepassword')
        loginPage.submitBtn.click()
        expect(votePage.thanksAlertText.isDisplayed()).toBe(false);

        votePage.avengersRadio.click();
        votePage.submitButton.click();
        expect(votePage.avengersValue.getText()).toEqual('6');
        expect(votePage.thanksAlertText.getText()).toEqual('Thanks for voting!');
        expect(votePage.voteFormSection.isDisplayed()).toBe(false);
    })
    
    it('should add 1 to deadPool votes', function()
    {
        loginPage.emailField.sendKeys('tester@glitchitsytem.com')
        loginPage.passwordField.sendKeys('fakepassword')
        loginPage.submitBtn.click()
        expect(votePage.thanksAlertText.isDisplayed()).toBe(false);

        votePage.deadPoolRadio.click();
        votePage.submitButton.click();
        expect(votePage.deadpoolValue.getText()).toEqual('23')
        expect(votePage.thanksAlertText.getText()).toEqual('Thanks for voting!');
        expect(votePage.voteFormSection.isDisplayed()).toBe(false);
    })

    it('should add 1 to spiderMan votes', function()
    {
        loginPage.emailField.sendKeys('tester@glitchitsytem.com')
        loginPage.passwordField.sendKeys('fakepassword')
        loginPage.submitBtn.click()
        expect(votePage.thanksAlertText.isDisplayed()).toBe(false);

        votePage.spiderManRadio.click();
        votePage.submitButton.click();
        expect(votePage.spidermanValue.getText()).toEqual('13')
        expect(votePage.thanksAlertText.getText()).toEqual('Thanks for voting!');
        expect(votePage.voteFormSection.isDisplayed()).toBe(false);
    })

    it('should add 1 to ironMan votes', function()
    {
        loginPage.emailField.sendKeys('tester@glitchitsytem.com')
        loginPage.passwordField.sendKeys('fakepassword')
        loginPage.submitBtn.click()
        expect(votePage.thanksAlertText.isDisplayed()).toBe(false);

        votePage.ironManRadio.click();
        votePage.submitButton.click();
        expect(votePage.ironManValue.getText()).toEqual('2')
        expect(votePage.thanksAlertText.getText()).toEqual('Thanks for voting!');
        expect(votePage.voteFormSection.isDisplayed()).toBe(false);
    })

})


