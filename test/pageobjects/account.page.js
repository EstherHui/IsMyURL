import Page from './page';

const EMAIL_TXB = '#root > ion-app > div > ion-content > div > div.LoginPage_form_section__2zB1z > form > ion-list > div:nth-child(1) > ion-item > ion-input > input' ;
const PASSWORD_TXB = '#root > ion-app > div > ion-content > div > div.LoginPage_form_section__2zB1z > form > ion-list > div:nth-child(2) > ion-item > ion-input > input';
const LOGIN_BTN = '#root > ion-app > div > ion-content > div > div.LoginPage_form_section__2zB1z > form > ion-button';
const ACCOUNTSET_BTN = '.button.hydrated.in-toolbar.ion-activatable.ios > .button.button-default.button-solid.hydrated.in-toolbar.ion-activatable.ion-color.ion-color-light-primary.ios.mr-2';
const LOGOUT_BTN = '.button.button-solid.hydrated.ion-activatable.ion-color.ion-color-medium-3.ios.m-5';
const LOGOUTCONFIRM_BTN = 'ion-row .hydrated:nth-of-type(2) [expand]';
const CHANGEPASS_BTN = '.flex-col:nth-of-type(2) [class="flex justify-between items-center text-default text-subtitle-1 font-semibold cursor-pointer p-5"]:nth-of-type(6)';
const CURRETPASS_TXB = 'input[name="current_password"]';
const NEWPASS_TXB = 'input[name="password"]';
const CONFIRMPASS_TXB = 'input[name="confirm_password"]';
const SUBMIT_BTN = 'ion-button[type="submit"]';
const CHANGEEMAIL_BTN ='.flex-col:nth-of-type(2) [class="flex justify-between items-center text-default text-subtitle-1 font-semibold cursor-pointer p-5"]:nth-of-type(5)';
const NEWEMAIL_TXB= 'input[name="email"]';
const VERIFY_BTN ='.button.button-block.button-solid.hydrated.ion-activatable.ios';
const CONFIRMOTP_BTN ='.button.button-fat.button-solid.hydrated.ion-activatable.ion-color.ion-color-primary.ios.ml-auto';
const verifycodeA = 'input[aria-label="Please enter verification code. Character 1"]';
const verifycodeB = 'input[aria-label="Character 2"]';
const verifycodeC = 'input[aria-label="Character 3"]';
const verifycodeD = 'input[aria-label="Character 4"]';
const verifycodeE = 'input[aria-label="Character 5"]';
const verifycodeF = 'input[aria-label="Character 6"]';

class AccountPage extends Page {
     
    open() {

        return super.open('login');

    }


    async clickAccountSetBTN(){

        await (await $(ACCOUNTSET_BTN)).click();
        return this;

    }

    async clickChangePasstBTN(){

        await (await $(CHANGEPASS_BTN)).click();
        return this;

    }

    async LoginCredential(email, password){

        await (await $(EMAIL_TXB)).setValue(email);
        await (await $(PASSWORD_TXB)).setValue(password);
        await (await $(LOGIN_BTN)).click();

        return this;
    }

    async ChangePassCredential(currentpass, newpass, confirmpass){

        await(await $(CURRETPASS_TXB)).setValue(currentpass);
        await(await $(NEWPASS_TXB)).setValue(newpass);
        await(await $(CONFIRMPASS_TXB)).setValue(confirmpass);
        await(await $(SUBMIT_BTN)).click();

        return this;

    }

    async Logout(){

        await(await $(LOGOUT_BTN)).click();
        await browser.pause(1000);
        await(await $(LOGOUTCONFIRM_BTN)).click();

    }

    async clickChangeEmailBTN(){

        await(await $(CHANGEEMAIL_BTN)).click();

    }

    async ChangeEmailCredential(newemail){

        await(await $(NEWEMAIL_TXB)).setValue(newemail);
        await(await $(VERIFY_BTN)).click();

    }

    async verifycode(A,B,C,D,E,F){

        await(await $(verifycodeA)).setValue(A);
        await(await $(verifycodeB)).setValue(B);
        await(await $(verifycodeC)).setValue(C);
        await(await $(verifycodeD)).setValue(D);
        await(await $(verifycodeE)).setValue(E);
        await(await $(verifycodeF)).setValue(F);
        await(await $(CONFIRMOTP_BTN)).click();


    }

}

export default new AccountPage();