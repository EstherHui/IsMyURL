import AccountPage from  '../flow/Account';
import testdata from '../test_data/Account001';


const data = testdata.credential;
const accountflow = new AccountPage(data);

describe('AccountSetting001 - Account Setting ', () => {
    

    // it ('T001 - Verify Display', async() => {
        

    // });

  

});

describe('AccountSetting002 - Change Password ', () => {
    
    // it ('T002 - Verify change password display', async() => {
        
        // await accountflow.Login();
        // await accountflow.accessChangePassword();

    // });

    // it ('T003 - Change password with blank all field', async() => {
        
    //     await accountflow.Login();
    //     await accountflow.accessChangePassword();
    //     await accountflow.ChangePassBlank();
    //     await accountflow.verifyChangePassMessage('Is Required');

    // });

    // it ('T004 - Change password with blank current password', async() => {
        
    //     await accountflow.Refresh();
    //     await accountflow.accessChangePassword();
    //     await accountflow.ChangePassBlankCurrent();
    //     await accountflow.verifyChangePassMessage('Current Login Password Is Required');

    // });

    // it ('T005 - Change password with blank new password', async() => {
        
    //     await accountflow.Refresh();
    //     await accountflow.accessChangePassword();
    //     await accountflow.ChangePassBlankNew();
    //     await accountflow.verifyChangePassMessage('New Login Password Is Required');

    // });

    // it ('T006 - Change password with blank confirm password', async() => {
        
    //     await accountflow.Refresh();
    //     await accountflow.accessChangePassword();
    //     await accountflow.ChangePassBlankConfirm();
    //     await accountflow.verifyChangePassMessage('Confirm Login Password Is Required');

    // });

    // it ('T007 - Change password with invalid new password', async() => {
        
    //     await accountflow.Login();
    //     //await accountflow.Refresh();
    //     await accountflow.accessChangePassword();
    //     await accountflow.ChangePassInvalidPass();
    //     await accountflow.verifyChangePassError('Password Must Contain One Letter One Number And One Special Character');

    // });

    // it ('T008 - Change password with wrong current password', async() => {
        
    //     await accountflow.Refresh();
    //     await accountflow.accessChangePassword();
    //     await accountflow.ChangePassWrongCurrent();
    //     await accountflow.verifyChangePassError('Invalid Current Password');

    // });

    // it ('T009 - Change password with equal current and new password', async() => {
        
    //     await accountflow.Refresh();
    //     await accountflow.accessChangePassword();
    //     await accountflow.ChangePassAllSame();
    //     await accountflow.verifyChangePassErrorMessage('Not Equal To');

    // });

    // it ('T010 - Change password with different new and confirm password', async() => {
        
    //     await accountflow.Refresh();
    //     await accountflow.accessChangePassword();
    //     await accountflow.ChangePassDiffNewComfirm();
    //     await accountflow.verifyChangePassErrorMessage('Confirm Login Password Equal To New Login Password');

    // });

    // it ('T011 - Change password success', async() => {
        
    //     await accountflow.Login();
    //     //await accountflow.Refresh();
    //     await accountflow.accessChangePassword();
    //     await accountflow.ChangePassSuccess();
    //     await accountflow.verifyChangePassSuccess('Successfully');

    // });

    // it ('T012 - Log into system with the new password', async() => {
        
    //     // await accountflow.Refresh();
    //     // await accountflow.Logout();
    //     await accountflow.LoginNew();
    //     await accountflow.verifyLoginSuccess();

    // });

    // it ('T013 - Log into system with the new password', async() => {
        
    //     // await accountflow.Refresh();
    //     await accountflow.Logout();
    //     await browser.pause(1000);
    //     await accountflow.Login();
    //     await accountflow.verifyLoginFail('Invalid Password');//cannot catch the message

    // });

    

});

describe('AccountSetting003 - Change Email', () => {

    // it('T014 - Change Email Displayed', async() => {

    //     await accountflow.LoginNew();
    //     await accountflow.accessChangeEmail();

    // });

    it('T015 - Change Email with blank all field', async() => {
        
        await accountflow.LoginNew();
        // await accountflow.Refresh();
        await accountflow.accessChangeEmail();
        await accountflow.ChangeEmailBlank();
        await accountflow.veriffyChangeEmailMessage('New Email Is Required');

    });

    it('T016 - Change Email with invalid email', async() => {
        
        // await accountflow.LoginNew();
        await accountflow.Refresh();
        await accountflow.accessChangeEmail();
        await accountflow.ChangeEmailInvalid();
        await accountflow.veriffyChangeEmailMessage('Invalid Email');

    });

    // it('T017 - Change Email successfully', async() => {
        
    // });

    // it('T018 - Login with new email', async() => {
        
    // });

    // it('T019 - Login with previous email', async() => {
        
    // });

});


