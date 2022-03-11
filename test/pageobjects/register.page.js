import Page from './page';

const EMAIL_TXB = 'input[name="email"]';
const PASSWORD_TXB = 'input[name="password"]';
const CONFIRMPASS_TXB = 'input[name = "confirm_password"]';
const SIGNUP_BTN = '#root > ion-app > div > ion-content > div > div.RegisterPage_form_section__3Kbi_ > form > ion-button';
//const THIRDPARTY_BTN = '';
const verifycodeA = 'input[aria-label="Please enter verification code. Character 1"]';
const verifycodeB = 'input[aria-label="Character 2"]';
const verifycodeC = 'input[aria-label="Character 3"]';
const verifycodeD = 'input[aria-label="Character 4"]';
const verifycodeE = 'input[aria-label="Character 5"]';
const verifycodeF = 'input[aria-label="Character 6"]';

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

    async verifycode(A,B,C,D,E,F){

        await(await $(verifycodeA)).setValue(A);
        await(await $(verifycodeB)).setValue(B);
        await(await $(verifycodeC)).setValue(C);
        await(await $(verifycodeD)).setValue(D);
        await(await $(verifycodeE)).setValue(E);
        await(await $(verifycodeF)).setValue(F);


    }

}
export default new RegisterPage;
