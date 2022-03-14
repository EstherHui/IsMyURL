import Landing from '../pageobjects/landing.page';

export default class Landingg{

    constructor(testdata){
        this._testdata = testdata;
    }

    async verifyErrorMessage(content){

        let message = $('[class="error-message-box"]');
        await expect(message).toHaveTextContaining(content);

    }

    async verifyInvalid(content){

        let error = $('.hydrated.ion-color.ion-color-danger.ios');
        await expect(error).toHaveTextContaining(content);

    }

    async verifyShortenGenerate(content){

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


}