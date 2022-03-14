import Page from './page';

const SHORTENURL_TXB = 'input[name="url"]';
const SHORTENURL_BTN = '.button.button-fat.button-solid.hydrated.ion-activatable.ion-color.ion-color-secondary.ios';
const PLAN_BTN = '#root > ion-app > div > ion-header > ion-toolbar > div > div.flex.items-center > div > ion-button.button-nav.ion-color.ios.button.button-default.button-clear.in-toolbar.ion-activatable.ion-focusable.hydrated.button-nav-selected.ion-color-tertiary > ion-label';
const GETSTART_BTN = '.button.button-fat.button-outline.hydrated.ion-activatable.ion-color.ion-color-light.ios';
const CONTACTUS_BTN = 'div:nth-of-type(1) > ion-router-link:nth-of-type(5)';
const EMAIL_TXB = 'input[name="email"]';
const SUBJECT_TXB = 'input[name="subject"]';
const DESCRIPT_TXB ='textarea[name="description"]';
const SUBMIT_BTN = '.button.button-block.button-fat.button-solid.hydrated.ion-activatable.ios';

class LandingPage extends Page {

    open() {

        return super.open('landing/home/');

    }

    async clickPlanBTN(){

        await (await $(PLAN_BTN)).click();// BTN cannot found !

    }

    async clickGetStart(){

        const getstart = await $(GETSTART_BTN);
        await getstart.scrollIntoView();
        await getstart.click();

    }

    async clickContactUs(){

        const contact = await $(CONTACTUS_BTN);
        await contact.scrollIntoView();
        await browser.pause(1000);
        await contact.click();

    }

    async EmailTXBisDisplayed(){

        return $(EMAIL_TXB).isDisplayed();

    }

    async SubjectTXBisDisplayed(){

        return $(SUBJECT_TXB).isDisplayed();

    }

    async DescriptionTXBisDisplayed(){

        return $(DESCRIPT_TXB).isDisplayed();

    }


    async ShortenURLCredential(link){

        await (await $(SHORTENURL_TXB)).setValue(link);
        await (await $(SHORTENURL_BTN)).click();

    }
    
    async ContactUsCredential(email, subject, description){

        await(await $(EMAIL_TXB)).setValue(email);
        await(await $(SUBJECT_TXB)).setValue(subject);
        await(await $(DESCRIPT_TXB)).setValue(description);
        await(await $(SUBMIT_BTN)).click();

    }
    

}
export default new LandingPage;