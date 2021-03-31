var HeaderPage = function(){}

HeaderPage.prototype = Object.create({}, {
    headerTitle : {get: function(){return element(by.css('body > div.container-fluid > div:nth-child(1) > h1'))}},
    headerImage : {get: function(){return element(by.css('body > div.container-fluid > div:nth-child(2) > img'))}},
    headerBody : {get: function(){return element(by.css('body > div.container-fluid > div:nth-child(3) > div > p'))}}

    })

module.exports = HeaderPage