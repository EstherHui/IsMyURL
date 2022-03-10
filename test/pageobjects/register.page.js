import Page from './page';

const EMAIL_TXB = 'input[name="email"]';
const PASSWORD_TXB = 'input[name="password"]';
const CONFIRMPASS_TXB = 'input[name = "confirm_password"]';
const SIGNUP_BTN = '#root > ion-app > div > ion-content > div > div.RegisterPage_form_section__3Kbi_ > form > ion-button';
//const THIRDPARTY_BTN = '';

class RegisterPage extends Page {

    open() {

        return super.open('register');

    }

    async RegisterCredential(email,password,confirmpass){

        await(await $(EMAIL_TXB)).setValue(email);
        await(await $(PASSWORD_TXB)).setValue(password);
        await(await $(CONFIRMPASS_TXB)).setValue(confirmpass);
        await(await $(SIGNUP_BTN)).click();

        return this;

    }

}
export default new RegisterPage;