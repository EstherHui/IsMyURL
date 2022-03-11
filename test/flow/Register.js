import Register from '../pageobjects/register.page';

export default class Registering {

    constructor (testdata){
        this._testdata = testdata;
    }

    async verifyRegisterDisplay(){



    }

    async verifyErrorMessage(content){

        let message = $('div:nth-of-type(1) > .mt-1.text-danger.text-sm');
        await expect(message).toHaveTextContaining(content);

    }

    async verifyError(content){

    let error = $('.hydrated.ion-color.ion-color-danger.ios');
    await expect(error).toHaveTextContaining(content);

    }

   async RegisterWithBlank(){

        await Register.open();
        await Register.RegisterCredential(null , null , null);

    }

    async RegisterWithBlankEmail(){

        await Register.open();
        await Register.RegisterCredential(null , this._testdata.password , this._testdata.password);

    }

    async RegisterWithInvalidEmail(){

        await Register.open();
        await Register.RegisterCredential(this._testdata.invalidemail , this._testdata.password, this._testdata.password);

    }

    async RegisterWithExistingEmail(){

        await Register.open();
        await Register.RegisterCredential(this._testdata.existingemail , this._testdata.password, this._testdata.password);

    }

}