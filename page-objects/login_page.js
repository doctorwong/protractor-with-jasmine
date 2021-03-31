//Login Page Objects

var LoginPage = function() {}

LoginPage.prototype = Object.create({},
{
    loginTitleText: {get:function() {return element(by.id('login-title'))}},
    emailFieldLabel: {get:function() {return element(by.css('#form-login > div:nth-child(1) > label'))}},
    emailField: {get:function() {return element(by.id('loginEmail'))}},
    passwordFieldLabel: {get:function() {return element(by.css('#form-login > div:nth-child(2) > label'))}},
    passwordField: {get:function() {return element(by.id('loginPassword'))}},
    rememberPassword: {get:function() {return element(by.id('rememberLoginChk'))}},

    submitBtn: {get: function () { return element(by.buttonText('Submit'))}},
    loginErrorMsg: {get:function() {return element(by.id('login-alert'))}},
    rememberChkb: {get:function() {return element(by.id('rememberLoginChk'))}},
    rememberChk: {get:function() {return element(by.css('#form-login > div.form-check > label'))}}
})

module.exports = LoginPage

