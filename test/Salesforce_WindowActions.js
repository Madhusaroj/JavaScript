// TC - Handling New Tab Test Case - for Salesforce Application
// Note : Can Execute in both browser - In Browser option keep both chrome and Firefox
// Command to run Particular Test case ->   npm test -- --spec ./test/testcasename



describe('Perform Few Window Actions',function()
{
    it('Switch Tab Action',function()
    {
        browser.url('https://www.salesforce.com/');
        browser.maximizeWindow();
        $(`//span[text()='Start my free trial']`).click();
        browser.pause(7000)
        browser.switchWindow('https://www.salesforce.com/in/form/signup');
        browser.pause(2000);
        $(`//input[@name='UserFirstName']`).setValue('Madhusmita');

        browser.pause(7000);


    });
});