import Login from '../pageobjects/login.page';

export default class Logging {

    constructor(testdata) {
        this._testdata = testdata;
      }

    async verifyLogin(){
        
        await Login.open();
        await expect(await Login.isEmailTXBdisplay).toBeDisplayed();

    }

    async LoginBlank(){

        await Login.open();
        await Login.LoginCredential(null , null );

    }

    async LoginBlankEmail(){

        await Login.open();
        await Login.LoginCredential(null , this._testdata.password);

    }

    async LoginBlankPassword(){

        await Login.open();
        await Login.LoginCredential(this._testdata.email , null);

    }

    async LoginInvalidPassword(){

        await Login.open();
        await Login.LoginCredential(this._testdata.email , this._testdata.invalid_password);

    }

    async LoginInvalidEmail(){

        await Login.open();
        await Login.LoginCredential(this._testdata.invalid_email , this._testdata.password);

    }

    async LoginNonExisting(){

        await Login.open();
        await Login.LoginCredential(this._testdata.emailB , this.passwordB);

    }

    async LoginSuccess(){

        await Login.open();
        await Login.LoginCredential(this._testdata.email, this._testdata.password);

    }

    async verifyLoginSuccess(){

        await expect(browser).toHaveUrlContaining('home');

    }

    async LoginSecond(){

        await Login.clickSigninBTN();
        await Login.LoginCredential(this._testdata.secondemail, this._testdata.secondpassword);

    }

    

    async Logout(){

        await Login.Logout();

    }

    async verifyErrorMessage(content){
        
        let message = $('#root > ion-app > div > ion-content > div > div.LoginPage_form_section__2zB1z > form > ion-list > div:nth-child(1) > div');
        await expect(await message).toHaveTextContaining(content);

    }

    async verifyMessage(content){

        let message = $('#root > ion-app > div > ion-content > div > div.LoginPage_form_section__2zB1z > form > ion-list > div.error-wrapper.invalid.text-default.text-subtitle-2.font-bold > div');
        await expect(await message).toHaveTextContaining(content);

    }

    async verifyError(content){

        let error = $('#shadow-root > div> div> div> div.toast-message');
        await expect(await error).toHaveTextContaining(content);

    }

    async ResetPassword(email){

        await Login.open();
        await Login.ResetPasswordCredential(email)

    }





}