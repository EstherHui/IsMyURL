import Page from './page';

const SHORTENURL_TXB = 'input[name="url"]';
const SHORTENURL_BTN = '.button.button-fat.button-solid.hydrated.ion-activatable.ion-color.ion-color-secondary.ios';
const PLAN_BTN = '#root > ion-app > div > ion-header > ion-toolbar > div > div.flex.items-center > div > ion-button.button-nav.ion-color.ios.button.button-default.button-clear.in-toolbar.ion-activatable.ion-focusable.hydrated.button-nav-selected.ion-color-tertiary > ion-label';
const GETSTART_BTN = '.button.button-fat.button-outline.hydrated.ion-activatable.ion-color.ion-color-light.ios';

class LandingPage extends Page {

    open() {

        return super.open('landing/home/');

    }

    async ShortenURLCredential(link){

        await (await $(SHORTENURL_TXB)).setValue(link);
        await (await $(SHORTENURL_BTN)).click();

    }

    async clickPlanBTN(){

        await (await $(PLAN_BTN)).click();// BTN cannot found !

    }

    async clickGetStart(){

        const getstart = await $(GETSTART_BTN);
        await getstart.scrollIntoView();
        await getstart.click()

    }
    

}
export default new LandingPage;