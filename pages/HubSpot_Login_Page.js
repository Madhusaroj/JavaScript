const elementUtil = require('../util/elementUtil.js')
const constantData = require('../constants.js')

class LoginPage
{

    //Page Locators
    get Username()    {  return $('#username') }
    get password()    {  return $('#password') }
    get loginbtn()    {  return $('#loginBtn') }
    get signUpLink()  {  return $('=Sign up')  }

    //Page Function
    getPageTitle()
    {
      return elementUtil.doGetPageTitle(constantData.login_page_title)
    }

    isSignUpLinkExist()
    {
        return elementUtil.doIsDisplayed(this.signUpLink)
    }

    loginToApplication(email,pwd)
    {
        elementUtil.doSetValue(this.Username,email)
        elementUtil.doSetValue(this.password,pwd)
        elementUtil.doClick(this.loginbtn)
    }

}
module.exports = new LoginPage();
