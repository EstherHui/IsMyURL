import LoginPage from  '../flow/Login';
import testdata from '../test_data/Login001';

const data = testdata.credential;
const loggingflow = new LoginPage(data);


describe('Login001 - ', () => {
    //  it('cannot display', async () => {

    //     await loggingflow.verifyLogin();

    // });

    it ('T002 - Login with blank all field', async() => {
        
        await loggingflow.LoginBlank();
        
        let message = $('#root > ion-app > div > ion-content > div > div.LoginPage_form_section__2zB1z > form > ion-list > div:nth-child(1) > div');
        await loggingflow.ExpectMessage(message, 'Is Required');

    });

    it ('T003 - Login with blank email', async() => {
        
       
        await loggingflow.LoginBlankEmail();
        
        let message = $('#root > ion-app > div > ion-content > div > div.LoginPage_form_section__2zB1z > form > ion-list > div:nth-child(1) > div');
        await loggingflow.ExpectMessage(message, 'Email Is Required');

    })

    it ('T004 - Login with blank password', async() => {
        
        await loggingflow.LoginBlankPassword();
        
        let message = $('#root > ion-app > div > ion-content > div > div.LoginPage_form_section__2zB1z > form > ion-list > div.error-wrapper.invalid.text-default.text-subtitle-2.font-bold > div');
        await loggingflow.ExpectMessage(message,'Password Is Required');

    })

    // it ('T005 - Login with invalid password', async() => {
        
    //     await loggingflow.LoginInvalidPassword();        
    //     let message = $('[class="toast-content"]');//cannot catch the message
    //     await loggingflow.ExpectMessage(message, 'Invalid Email');

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

    // });

    // it('T009 - Login Successfully twice',async () => {

    //     await loggingflow.LoginSuccess();
    //     await expect(browser).toHaveUrlContaining('home');
    //     await loggingflow.Logout();//cannot get the selector code properly
    //     // await loggingflow.LoginSecond();
    //     // await browser.pause(5000);
    //     // await expect(browser).toHaveUrlContaining('home');



    // });


});

// describe('Login002 - ', () => {

//     it('T010 - Forgot Password display' , async() => {

        

//     });

// });



