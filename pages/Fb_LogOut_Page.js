class FB_LogOut{


get AccountSettingTab()
{
    return $(`//div[text()='Account Settings']`)
}

get logOut()
{
    return $(`//span[text()='Log Out']`)
}

}

module.exports = new FB_LogOut();