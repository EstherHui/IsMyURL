import Page from './page';

const EMAIL_TXB = '#root > ion-app > div > ion-content > div > div.LoginPage_form_section__2zB1z > form > ion-list > div:nth-child(1) > ion-item > ion-input > input' ;
const PASSWORD_TXB = '#root > ion-app > div > ion-content > div > div.LoginPage_form_section__2zB1z > form > ion-list > div:nth-child(2) > ion-item > ion-input > input';
const LOGIN_BTN = '#root > ion-app > div > ion-content > div > div.LoginPage_form_section__2zB1z > form > ion-button';
const REMEMBER_ME = '#root > ion-app > div > ion-content > div > div.LoginPage_form_section__2zB1z > form > div > div > ion-checkbox';
const RESETPASS_BTN = '#root > ion-app > div > ion-content > div > div.LoginPage_form_section__2zB1z > form > div > ion-router-link';
const SIGNUP_BTN = '#root > ion-app > div > ion-content > div > div.LoginPage_form_section__2zB1z > div.flex.flex-wrap.justify-center.mb-12 > ion-router-link';
const PROFILESET_BTN = '.button.hydrated.in-toolbar.ion-activatable.ios > .button.button-default.button-solid.hydrated.in-toolbar.ion-activatable.ion-color.ion-color-light-primary.ios.mr-2';
const LOGOUT_BTN = '.button.button-solid.hydrated.ion-activatable.ion-color.ion-color-medium-3.ios.m-5';
const LOGOUTconfirm_BTN = 'ion-row .hydrated:nth-of-type(2) [expand]';
const RESETemail_TXB = '#root > ion-app > div > ion-content > div > div.ForgetPassword_form_section__20GME > form > ion-list > div > ion-item > ion-input > input';
const RESET_BTN = '#root > ion-app > div > ion-content > div > div.ForgetPassword_form_section__20GME > form > ion-button';
const SIGNIN_BTN = '.button.button-clear.button-default.button-fat.hydrated.in-toolbar.ion-activatable.ion-color.ion-color-light.ios.mr-2';

class LoginPage extends Page {
     
    open() {

        return super.open('login');

    }

    // async isEmailTXBdisplay() {

    //     return (await $(EMAIL_TXB));

    // }

    // async isPasswordTXBdisplay(){

    //     return $(PASSWORD_TXB).isDisplayed();

    // }

    // async isLoginBTNdisplay(){

    //     return $(LOGIN_BTN).isDisplayed();

    // }

    async clickSigninBTN(){

        await (await $(SIGNIN_BTN)).click();
        return this;

    }

    // async doubleEmail(){

    //     await(await $(EMAIL_TXB)).doubleClick()

    // }

    // async doublePass(){

    //     await(await $(PASSWORD_TXB)).doubleClick()

    // }

    async LoginCredential(email, password){

        await (await $(EMAIL_TXB)).setValue(email);
        await (await $(PASSWORD_TXB)).setValue(password);
        await (await $(LOGIN_BTN)).click();

        return this;
    }

    async Logout(){

        await(await $(PROFILESET_BTN)).click();
        await(await $(LOGOUT_BTN)).click();
        await(await $(LOGOUTconfirm_BTN)).click();

    }

    async ResetPasswordCredential(email){

        await(await $(RESETPASS_BTN)).click();
        await(await $(RESETemail_TXB)).setValue(email);
        await(await $(RESET_BTN)).click();

    }

}

export default new LoginPage();
