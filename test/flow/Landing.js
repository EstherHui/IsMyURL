import Landing from '../pageobjects/landing.page';

export default class Landingg{

    constructor(testdata){
        this._testdata = testdata;
    }

    async ShortenBlank(){

        await Landing.open();
        await Landing.ShortenURLCredential(null);

    }

}