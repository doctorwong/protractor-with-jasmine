var NavPage = function(){}

    NavPage.prototype = Object.create({}, {
        homeLink : {get: function() {return element(by.css('#navbarSupportedContent > ul > li.nav-item.active > a'))}},
        heroFactsLink : {get: function(){return element(by.id('navbarDropdown'))}},
        logoutLink : {get: function(){return element(by.css('#navbarSupportedContent > ul > li:nth-child(4) > a'))}},
        wolverineOption : {get: function(){return element(by.linkText('Wolverine'))}},
        spidermanOption : {get: function(){return element(by.linkText('Spider-Man'))}},
        wolverineModalTitle : {get: function(){return element(by.id('wolverineModalLabel'))}},
        wolverineModalBody : {get: function(){return element(by.css('#wolverineModal > div > div > div.modal-body'))}},
        wolverineModalCloseButton : {get: function(){return element(by.css('#wolverineModal > div > div > div.modal-footer > button'))}},
        wolverineModalXButton : {get: function(){return element(by.css('#wolverineModal > div > div > div.modal-header > button > span'))}},

        spidermanModalTitle : {get: function(){return element(by.id('spidermanModalLabel'))}},
        spidermanModalBody : {get: function(){return element(by.css('#spidermanModal > div > div > div.modal-body'))}},
        spidermanModalCloseButton : {get: function(){return element(by.css('#spidermanModal > div > div > div.modal-footer > button'))}},
        spidermanModalXButton :{get: function(){return element(by.css('#spidermanModal > div > div > div.modal-header > button > span'))}},
        searchField :{get: function(){return element(by.id('search-box'))}},
        searchButton :{get: function(){return element(by.css('#search-form > button'))}},

    })

module.exports = NavPage