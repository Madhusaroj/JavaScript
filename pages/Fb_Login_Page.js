class FB_LoginPage{


    get setUsername()
    {
        return $(`//input[@id='email']`)
    }

    get setPassword()
    {
        return $(`//input[@id='pass']`)
    }

    get clickLogin()
    {
        return $(`//input[@value='Log In']`)
    }

    }
    module.exports = new FB_LoginPage();
    