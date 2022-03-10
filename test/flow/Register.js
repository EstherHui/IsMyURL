import Register from '../pageobjects/register.page';

export default class Registering {

    constructor (testdata){
        this._testdata = testdata;
    }

    async verifyRegisterDisplay(){
        

    }

   async RegisterWithBlank(){

        await Register.open();
        await Register.RegisterCredential(null , null , null);

    }

    async RegisterWithBlankEmail(){

        await Register.open();
        await Register.RegisterCredential(null , this._testdata.password , this._testdata.password);

    }

}