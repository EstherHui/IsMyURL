import Page from './page';

const EMAIL_TXB = '#root > ion-app > div > ion-content > div > div.RegisterPage_form_section__3Kbi_ > form > ion-list > div:nth-child(1) > ion-item > ion-input > input';
const PASSWORD_TXB = '#root > ion-app > div > ion-content > div > div.RegisterPage_form_section__3Kbi_ > form > ion-list > div:nth-child(2) > ion-item > ion-input > input';
const CONFIRMPASS_TXB = '#root > ion-app > div > ion-content > div > div.RegisterPage_form_section__3Kbi_ > form > ion-list > div:nth-child(3) > ion-item > ion-input > input';
const SIGNUP_BTN = '#root > ion-app > div > ion-content > div > div.RegisterPage_form_section__3Kbi_ > form > ion-button';
//const THIRDPARTY_BTN = '';

class RegisterPage extends Page {

    open() {

        return super.open('register/');

    }

    async RegisterCredential(email,password,confirmpass){

        await(await $(EMAIL_TXB)).setValue(email);
        await(await $(PASSWORD_TXB)).setValue(password);
        await(await $(CONFIRMPASS_TXB)).setValue(confirmpass);
        await(await $(SIGNUP_BTN)).click();

        return this;

    }

}
export default new RegisterPage();