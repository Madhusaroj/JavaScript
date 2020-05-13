//const request = require('request');
const lp = require('../pages/login.page.js')
const configData = require('../config.js')
const constantData = require('../constants.js')

describe('Login Page Feature Test',function()
{
    // this.retries(2)  ---- It will try the  failed scenario 2 times before giving final result
    it('Verify login Page title',function()
    {
        browser.url("https://app.hubspot.com/")
        browser.maximizeWindow();
        const title =lp.getPageTitle()
        console.log("The page title is :"+title)
        assert.equal(constantData.login_page_title,title,'This is not the Title')

    }) 


    it('Verify SignUp Link',function()        // If want to execute only this test the it.only
    {
        browser.url("https://app.hubspot.com/")
        browser.maximizeWindow()
       assert.equal(true,lp.isSignUpLinkExist(),'Sign Up link doesnt exist')

    })

    it('Login To Application',function()
    {
        lp.loginToApplication(configData.username,configData.password)
    

    })

})