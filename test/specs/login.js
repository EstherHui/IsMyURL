import LoginPage from  '../flow/Login';
import testdata from '../test_data/Login001';

const data = testdata.credential;
const loggingflow = new LoginPage(data);


describe('Login001 - ', () => {
    //  it('cannot display', async () => {

    //     await loggingflow.verifyLogin();

    // });

    // it ('T002 - Login with blank all field', async() => {
        
    //     await loggingflow.LoginBlank();
    //     await loggingflow.verifyErrorMessage('Is Required');

    // });

    // it ('T003 - Login with blank email', async() => {
        
       
    //     await loggingflow.LoginBlankEmail();
    //     await loggingflow.verifyErrorMessage( 'Email Is Required');

    // })

    // it ('T004 - Login with blank password', async() => {
        
    //     await loggingflow.LoginBlankPassword();
    //     await loggingflow.verifyMessage('Password Is Required');

    // })

    // it ('T005 - Login with invalid password', async() => {
        
    //     await loggingflow.LoginInvalidPassword();
    //     await loggingflow.verifyError('Invalid Password')

    // })

    // it ('T006 - Login with invalid email', async() => {
        
    //     await loggingflow.LoginInvalidEmail();        
    //     let message = $('[class="toast-content"]');//cannot catch the message
    //     await loggingflow.ExpectMessage(message,'Invalid Email Or Password');

    // })

    // it ('T007 - Login with non-existing user', async() => {
        
    //     await loggingflow.LoginNonExisting();        
    //     let message = $('[class="toast-content"]');//cannot catch the message
    //     await loggingflow.ExpectMessage(message,'Invalid Email Or Password');

    // })
    

    // it('T008 - Login Successfully',async () => {

    //     await loggingflow.LoginSuccess();
    //     await expect(browser).toHaveUrlContaining('home');
    //     await loggingflow.Logout();
    //     await browser.pause(1000);

    // });

    // it('T009 - Login Successfully twice',async () => {

    //     await loggingflow.LoginSuccess();
    //     await loggingflow.verifyLoginSuccess();
    //     await loggingflow.Logout();
    //     await loggingflow.LoginSecond();
    //     await loggingflow.verifyLoginSuccess();



    // });


});

// describe('Login002 - ', () => {

//     it('T010 - Forgot Password display' , async() => {

        

//     });

// });



