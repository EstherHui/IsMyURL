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

    async LoginSecond(){

        await Login.open();
        await Login.LoginCredential(this._testdata.secondemail, this._testdata.secondpassword);

    }

    async Logout(){

        await Login.Logout();

    }

    async ExpectMessage(message, content){

        await expect(await message).toHaveTextContaining(content);

    }

}