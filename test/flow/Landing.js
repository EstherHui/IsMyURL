import Landing from '../pageobjects/landing.page';

export default class Landingg{

    constructor(testdata){
        this._testdata = testdata;
    }

    async verifyErrorMessage(content){

        let message = $('[class="error-message-box"]');
        await expect(message).toHaveTextContaining(content);

    }

    async verifyContactUsMessage(content){

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

    async verifyInvalid(content){

        let error = $('.hydrated.ion-color.ion-color-danger.ios');
        await expect(error).toHaveTextContaining(content);

    }

    async verifySuccess(content){

        let success = $('.hydrated.ion-color.ion-color-success.ios');
        await expect(success).toHaveTextContaining(content);

    }


    async ShortenBlank(){

        await Landing.open();
        await Landing.ShortenURLCredential(null);

    }

    async ShortenInvalid(){

        await Landing.open();
        await Landing.ShortenURLCredential(this._testdata.invalidlink);

    }

    async ShortenLink(){

        await Landing.open();
        await Landing.ShortenURLCredential(this._testdata.link);

    }

    async AccessPlan(){

        await Landing.open();
        await Landing.clickPlanBTN();

        let element = $('[class = "text-h2 text-white mb-4"]');
        await expect(element).toBePresent();

    }

    async AccessPlanGetStart(){

        await Landing.open();
        await Landing.clickGetStart();

        let element = $('[class = "text-h2 text-white mb-4"]');
        await expect(element).toBePresent();

    }

    async AccessContactUs(){

        await Landing.open();
        await Landing.clickContactUs();

    }

    async verifyContactUsAccess(){

        let element = $('[class="text-h4 text-default font-medium mb-12"]');
        await expect(element).toBePresent();

    }

    async verifyContactUsDisplayed(){

        let email = await Landing.EmailTXBisDisplayed();
        let subject = await Landing.SubjectTXBisDisplayed();
        let descript = await Landing.DescriptionTXBisDisplayed() ;

        // console.log('IsDisplayed? : ',await email.isDisplayed()); //return false T.T 
        await expect(email).toBeDisplayed();
        await expect(subject).toBeDisplayed();
        await expect(descript).toBeDisplayed();

    }

    async ContactUsBlank(){

        await Landing.ContactUsCredential(null, null, null);

    }

    async ContactUsBlankEmail(){

        await Landing.ContactUsCredential(null, this._testdata.subject, this._testdata.description);

    }

    async ContactUsBlankSubject(){

        await Landing.ContactUsCredential(this._testdata.email, null, this._testdata.description);

    }

    async ContactUsBlankDescript(){

        await Landing.ContactUsCredential(this._testdata.email, this._testdata.subject,  null);

    }

    async ContactUsInvalidEmail(){

        await Landing.ContactUsCredential(this._testdata.invalidemail, this._testdata.subject, this._testdata.description)

    }

    async ContactUsSuccess(){

        await Landing.ContactUsCredential(this._testdata.email, this._testdata.subject, this._testdata.description)

    }



}