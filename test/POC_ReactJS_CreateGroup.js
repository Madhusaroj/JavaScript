// TC- Complete End- to End Scenario in FaceBook Application
// Note : Execute Only In Chrome - In Browser option only keep Chrome
// Command to run Particular Test case ->   npm test -- --spec ./test/testcasename


const AllureReporter= require('@wdio/allure-reporter').default

const loginpage_fb = require('../pages/Fb_Login_Page')
const CreateGroup_fb = require('../pages/Fb_CreateGroup_Page')
const logoutpage_fb = require('../pages/Fb_LogOut_Page')


const totalContent = require('C:\\Workspace-JS\\WEBIO-App-POM-Framework\\DataFile_FB.json');
let usernameValue = totalContent["UserName"]
let PasswordValue = totalContent["Password"]
let ProfileNameValue = totalContent["ProfileName"]


describe("Login to React_Native_App_FaceBook Application",function()
{


    let GroupNameValue = "WebIO";
    it("Launch the Application",function()
    {
        browser.url('https://www.facebook.com');
        browser.maximizeWindow();
        let title = browser.getTitle()
        console.log(title)

    });


    it("Login into the Application",function()
    {
        const usredit_box=loginpage_fb.setUsername;
        usredit_box.setValue(usernameValue);
        const passedit_box = loginpage_fb.setPassword;
        passedit_box.setValue(PasswordValue);
        const lgin_bnt=loginpage_fb.clickLogin;
        lgin_bnt.click();
    });
   

    it("Create Group",function()
    {
        try{
        // let GroupNameValue = "WebIO";
        const home = CreateGroup_fb.homeButton;
        home.click();

        browser.pause(1000)

        const groups = CreateGroup_fb.groupLink;
        groups.click();

        browser.pause(2000)

        const createGroup_btn = CreateGroup_fb.createGroup;
        createGroup_btn.click();

        browser.pause(4000)
        // let windowname =browser.getWindowHandle();
        // console.log("new window is : "+windowname)

        // browser.switchToWindow(windowname);
 
        const group_name = CreateGroup_fb.setGroupName;
        group_name.click();
        group_name.setValue(GroupNameValue)

        const profileName_txt = CreateGroup_fb.profileName;
        profileName_txt.setValue('Saroj')

        const create_btn = CreateGroup_fb.create;
        create_btn.click();

        browser.pause(4000)
        }
        catch(err)
        {
            console.log("Message is :"+err)
        }
        finally{
            console.log("Its always execuited-----")
        }
    })


    it("Delete Group",function()
    {
        const home = CreateGroup_fb.homeButton;
        home.click();

        browser.pause(7000);
        home.click();  
        
        const profilename = $(`//span[text()='Madhusmita']`)
        profilename.click();

        browser.pause(5000);
        home.click(); 

        browser.pause(6000)

        const groups = CreateGroup_fb.groupLink;
        groups.click();

        // let AssignedgroupName = "WebIO";
        const groupname = CreateGroup_fb.groupName(GroupNameValue);
        groupname.click();

        browser.pause(4000)

        const joined = CreateGroup_fb.joinedList;
        joined.click();

        browser.pause(5000)
        const leaveGrp = CreateGroup_fb.optionLeaveGroup;
        leaveGrp.click();

        browser.pause(4000)

        const leaveDelete = CreateGroup_fb.leaveAndDeleteOpt;
        leaveDelete.click();

        const close_btn = CreateGroup_fb.close;
        close_btn.click();

        browser.pause(4000)

    });

    
    it("LogOut from Application",function()
    {
         const accountTab = logoutpage_fb.AccountSettingTab
         accountTab.click();
         const logOut_btn = logoutpage_fb.logOut
         logOut_btn.click();
         browser.pause(4000)

    });



});