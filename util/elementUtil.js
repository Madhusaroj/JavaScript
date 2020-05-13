class ElementUtil
{
    doClick(element)
    {
        element.waitForDisplayed()
        element.click()
    }


    doSetValue(element,value)
    {
        element.waitForDisplayed()
        element.setValue(value)
    }

    doGetText(element)
    {
       element.waitForDisplayed()
       return element.getText()
    }


    doIsDisplayed(element)
    {
        element.waitForDisplayed()
        return element.isDisplayed()
    }

    doGetPageTitle(pageTitle)
    {
        browser.waitUntil(function()
        {
            return (browser.getTitle()===pageTitle)
        },2000,'Title is not present '
        )
        return browser.getTitle()
    }

}
module.exports = new ElementUtil();