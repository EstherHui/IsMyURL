import Account from '../pageobjects/account.page';

export default class AccountSetting {

    constructor(testdata) {
        this._testdata = testdata;
      }


    async Login(){

        await Account.open();
        await Account.LoginCredential(this._testdata.email, this._testdata.password);

    }

    async LoginNew(){

        await Account.open()
        await Account.LoginCredential(this._testdata.email, this._testdata.newpassword);

    }

    async Refresh(){

        await Account.open();

    }

    async verifyChangePassMessage(content){

        let messageE = await $('div:nth-of-type(1) > .mt-1.text-danger.text-sm');
        let messageS = await $('div:nth-of-type(2) > .mt-1.text-danger.text-sm');
        let messageD = await $('div:nth-of-type(3) > .mt-1.text-danger.text-sm');

        if( await messageE.isDisplayed() == true ){

         await expect(messageE).toHaveTextContaining(content);

        }

        else if( await messageS.isDisplayed() == true ){

            await expect(messageS).toHaveTextContaining(content);
   
        }

        else if( await messageD.isDisplayed() == true ){

            await expect(messageD).toHaveTextContaining(content);
   
        }

    }

    async verifyChangePassErrorMessage(content){

        let errormessage = await $('.error-wrapper.font-bold.invalid.text-default.text-subtitle-2 > .mt-1.text-danger.text-sm');
        await expect(errormessage).toHaveTextContaining(content);

    }

    async verifyChangePassError(content){

        let error = await $('.hydrated.ion-color.ion-color-danger.ios');
        await expect(error).toHaveTextContaining(content);

    }

    async verifyChangePassSuccess(content){

        let success = await $('.hydrated.ion-color.ion-color-success.ios');
        await expect(success).toHaveTextContaining(content);

    }

    async verifyLoginSuccess(){

        await expect(browser).toHaveUrlContaining('home');

    }

    async verifyLoginFail(content){

        let error = await $('#shadow-root > div> div> div> div.toast-message');
        await expect(error).toHaveTextContaining(content);

    }


    async accessChangePassword(){

        await Account.clickAccountSetBTN();
        await Account.clickChangePasstBTN();

    }

    async ChangePassBlank(){

        await Account.ChangePassCredential(null, null, null);

    }

    async ChangePassBlankCurrent(){

        await Account.ChangePassCredential(null, this._testdata.newpassword, this._testdata.newpassword);

    }

    async ChangePassBlankNew(){

        await Account.ChangePassCredential(this._testdata.password, null, this._testdata.newpassword);

    }

    async ChangePassBlankConfirm(){

        await Account.ChangePassCredential(this._testdata.password, this._testdata.newpassword, null);

    }

    async ChangePassInvalidPass(){

        await Account.ChangePassCredential(this._testdata.password, this._testdata.invalid_password, this._testdata.invalid_password);

    }

    async ChangePassWrongCurrent(){

        await Account.ChangePassCredential(this._testdata.passwordB, this._testdata.newpassword, this._testdata.newpassword);

    }

    async ChangePassAllSame(){

        await Account.ChangePassCredential(this._testdata.password, this._testdata.password, this._testdata.password);

    }

    async ChangePassDiffNewComfirm(){

        await Account.ChangePassCredential(this._testdata.password, this._testdata.newpassword, this._testdata.passwordB);

    }

    async ChangePassSuccess(){

        await Account.ChangePassCredential(this._testdata.password, this._testdata.newpassword, this._testdata.newpassword);

    }

    async Logout(){

        await Account.clickAccountSetBTN()
        await Account.Logout();

    }



}