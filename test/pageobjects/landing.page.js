import Page from './page';

const SHORTENURL_TXB = 'input[name="url"]';
const SHORTENURL_BTN = '.button.button-fat.button-solid.hydrated.ion-activatable.ion-color.ion-color-secondary.ios';

class LandingPage extends Page {

    open() {

        return super.open('landing/home/');

    }

    async ShortenURLCredential(link){

        await (await $(SHORTENURL_TXB)).setValue(link);
        await (await $(SHORTENURL_BTN)).click();

    }
    

}
export default new LandingPage;