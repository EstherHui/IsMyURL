import Page from './page';

const EMAIL_TXB = '#root > ion-app > div > ion-content > div > div.LoginPage_form_section__2zB1z > form > ion-list > div:nth-child(1) > ion-item > ion-input > input' ;
const PASSWORD_TXB = '#root > ion-app > div > ion-content > div > div.LoginPage_form_section__2zB1z > form > ion-list > div:nth-child(2) > ion-item > ion-input > input';
const LOGIN_BTN = '#root > ion-app > div > ion-content > div > div.LoginPage_form_section__2zB1z > form > ion-button';
const REMEMBER_ME = '#root > ion-app > div > ion-content > div > div.LoginPage_form_section__2zB1z > form > div > div > ion-checkbox';
const RESETPASS_BTN = '#root > ion-app > div > ion-content > div > div.LoginPage_form_section__2zB1z > form > div > ion-router-link';
const SIGNUP_BTN = '#root > ion-app > div > ion-content > div > div.LoginPage_form_section__2zB1z > div.flex.flex-wrap.justify-center.mb-12 > ion-router-link';
const PROFILESET_BTN = 'ion-menu-button[class="ios button in-toolbar ion-activatable ion-focusable hydrated"]';
const LOGOUT_BTN = 'button[type="button"]';
const LOGOUTconfirm_BTN = '#ion-overlay-17 > div > div > ion-grid > ion-row > ion-col:nth-child(2) > ion-button';
const RESETemail_TXB = '#root > ion-app > div > ion-content > div > div.ForgetPassword_form_section__20GME > form > ion-list > div > ion-item > ion-input > input';
const RESET_BTN = '#root > ion-app > div > ion-content > div > div.ForgetPassword_form_section__20GME > form > ion-button';

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

    async clickLoginBTN(){

        await (await $(LOGIN_BTN)).click();
        return this;

    }

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

    // async ResetPasswordCredential(email){

    //     await(await $(RESETPASS_BTN)).click();
    //     await(await $(RESETemail_TXB)).setValue(email);
    //     await(await $(RESET_BTN)).click();

    // }

}

export default new LoginPage();
