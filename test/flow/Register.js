import Register from '../pageobjects/register.page';

export default class Registering {

    constructor (testdata){
        this._testdata = testdata;
    }

    async verifyRegisterDisplay(){



    }

    async verifyErrorMessage(content){

        let MessageA = $('div:nth-of-type(3) > .mt-1.text-danger.text-sm');
        let message = $('div:nth-of-type(1) > .mt-1.text-danger.text-sm');

        if( await message.isDisplayed()== true){

            await expect(message).toHaveTextContaining(content);

        }

        else if(await MessageA.isDisplayed()== true){

            await expect(MessageA).toHaveTextContaining(content);

        }
        
        

    }

    async verifyMessage(content){

        let message = $('div:nth-of-type(2) > .mt-1.text-danger.text-sm');
        await expect(message).toHaveTextContaining(content);

    }

    async verifyError(content){

    let error = $('.hydrated.ion-color.ion-color-danger.ios');
    await expect(error).toHaveTextContaining(content);

    }

    async verifyNotice(content){

    let notice = $('#root > ion-app > div > ion-content > div > div.RegisterPage_form_section__3Kbi_ > form > ion-list > div:nth-child(2) > div:nth-child(2)');
    await expect(notice).toHaveTextContaining(content);

    }

    async verifySuccess(){

        await expect(browser).toHaveUrlContaining('login')

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

    async RegisterWithBlankPass(){

        await Register.open();
        await Register.RegisterCredential(this._testdata.email , null , this._testdata.password);

    }

    async RegisterWithPassLess(){

        await Register.open();
        await Register.RegisterCredential(this._testdata.email , this._testdata.dpassword , this._testdata.password);

    }

    async RegisterWithPassNoAl(){

        await Register.open();
        await Register.RegisterCredential(this._testdata.email , this._testdata.cpassword , this._testdata.password);

    }

    async RegisterWithPassNoSpecial(){

        await Register.open();
        await Register.RegisterCredential(this._testdata.email , this._testdata.bpassword , this._testdata.password);

    }

    async RegisterWithPassOnlyNum(){

        await Register.open();
        await Register.RegisterCredential(this._testdata.email , this._testdata.epassword , this._testdata.password);

    }

    async RegisterWithBlankConfirmPass(){

        await Register.open();
        await Register.RegisterCredential(this._testdata.email , this._testdata.password , null);

    }

    async RegisterWithNotMatching(){

        await Register.open();
        await Register.RegisterCredential(this._testdata.email , this._testdata.password , this._testdata.ConfirmPassword2);

    }

    async RegisterSuccess(){

        await Register.open();
        await Register.RegisterCredential(this._testdata.email, this._testdata.password, this._testdata.password);

    }

    async VerifyCode(){

        await Register.verifycode(this._testdata.verifycodeA, this._testdata.verifycodeB, this._testdata.verifycodeC, this._testdata.verifycodeD, this._testdata.verifycodeE, this._testdata.verifycodeF );

    }

}