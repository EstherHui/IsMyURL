import Page from './page';

const EMAIL_TXB = '#root > ion-app > div > ion-content > div > div.LoginPage_form_section__2zB1z > form > ion-list > div:nth-child(1) > ion-item > ion-input > input' ;
const PASSWORD_TXB = '#root > ion-app > div > ion-content > div > div.LoginPage_form_section__2zB1z > form > ion-list > div:nth-child(2) > ion-item > ion-input > input';
const LOGIN_BTN = '#root > ion-app > div > ion-content > div > div.LoginPage_form_section__2zB1z > form > ion-button';
const LINKSLIST = '';
const LINKSEARCH_BTN ='';
const URLANALYSIS ='';
const ADDNEWLINK_BTN ='';
const EDITLINK_BTN ='';
const ACCSETTING_BTN ='.button.hydrated.in-toolbar.ion-activatable.ios > .button.button-default.button-solid.hydrated.in-toolbar.ion-activatable.ion-color.ion-color-light-primary.ios.mr-2';
const NOTICE_BTN ='';
const FEATURES_BTN ='';

class Profile extends Page{

    open() {

        return super.open('login');

    }

    async AccSettingBTNisDisplay(){

       return $(ACCSETTING_BTN).isDisplayed();

    }

    async LoginCredential(email, password){

        await (await $(EMAIL_TXB)).setValue(email);
        await (await $(PASSWORD_TXB)).setValue(password);
        await (await $(LOGIN_BTN)).click();

        return this;
    }



}
export default new Profile;