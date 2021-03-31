var RosterPage = function() {}

RosterPage.prototype = Object.create({}, 
    {
        rosterTitleText: {get: function() {return element(by.css('body > div.container-fluid > div:nth-child(4) > h3'))}},
        wolverineItemTxt: {get: function() {return element(by.css('#hero-list > li:nth-child(1)'))}},
        ironmanItemTxt: {get: function() {return element(by.css('#hero-list > li:nth-child(2)'))}},
        deadpoolItemTxt: {get: function() {return element(by.css('#hero-list > li:nth-child(3)'))}},
        ThoritemTxt: {get: function() {return element(by.css('#hero-list > li:nth-child(4)'))}},
        spidermanItemTxt: {get: function() {return element(by.css('#hero-list > li:nth-child(5)'))}},
        rosterFieldLabel: {get: function() {return element(by.css('#addHero-form > div > label'))}},
        heroInput: {get: function() {return element(by.css('#heroInput'))}},
        sample: {get: function() {return element(by.css('#addHero-form > button'))}}
    })

    module.exports = RosterPage