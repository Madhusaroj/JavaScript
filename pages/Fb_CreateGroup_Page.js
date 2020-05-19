class CreateGroup_FB
{
    get homeButton()
    {
        return $(`//a[text()='Home']`)
    }

    get groupLink()
    {
        return $(`//div[text()='Groups']`)
    }

    get createGroup()
    {
        return $(`//button[text()='Create Group']`)
    }

    get setGroupName()
    {
        return $(`//input[@name='name']`)
    }

    get create()
    {
        return $(`//button[text()='Create']`)
    }

    groupName(grpnmae)
    {
        return $(`//span[text()='${grpnmae}']`)

    }

    get profileName()
    {
        return $(`//input[@placeholder='Enter names or email addresses...']`)
    }



    get joinedList()
    {
        return $(`//span[text()='Joined']`)
    }

    get optionLeaveGroup()
    {

        return $(`//span[text()='Leave Group']`)

    }

    get leaveAndDeleteOpt()
    {
        return $(`//button[@name='confirmed']`)
    }

    get uploadOpt()
    {
        return $(`//input[@name='file']`)
    }

    get close()
    {
        return $(`//div[text()='Close']`)
    }
}
module.exports = new CreateGroup_FB();