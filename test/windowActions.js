describe('Perform Few Window Actions',function()
{
    it('Window Handle',function()
    {
        browser.url('https://www.salesforce.com/');
        browser.maximizeWindow();
        $(`//span[text()='Start my free trial']`).click();
        browser.switchWindow('https://www.salesforce.com/in/form/signup');
        browser.pause(2000);
        $('#UserFirstName-ma0T').setValue('Madhusmita');

        browser.pause(7000);


    });
});