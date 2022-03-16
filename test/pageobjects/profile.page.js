import Page from './page';

const EMAIL_TXB = '#root > ion-app > div > ion-content > div > div.LoginPage_form_section__2zB1z > form > ion-list > div:nth-child(1) > ion-item > ion-input > input' ;
const PASSWORD_TXB = '#root > ion-app > div > ion-content > div > div.LoginPage_form_section__2zB1z > form > ion-list > div:nth-child(2) > ion-item > ion-input > input';
const LOGIN_BTN = '#root > ion-app > div > ion-content > div > div.LoginPage_form_section__2zB1z > form > ion-button';
const LINKSLIST = '';
const LINKSEARCH_BTN ='';
const URLANALYSIS ='';
const EDITLINK_BTN ='';
const ACCSETTING_BTN ='.button.hydrated.in-toolbar.ion-activatable.ios > .button.button-default.button-solid.hydrated.in-toolbar.ion-activatable.ion-color.ion-color-light-primary.ios.mr-2';
const NOTICE_BTN ='';
const FEATURES_BTN ='';
const CREATENEWLINK_BTN ='';
const DESTINATION_TXB ='';
const LINKTITLE_TXB ='';
const LINKDOMAIN_SLC ='';
const LINKSLASH_TXB ='';
const TAG_SLC = '';
const ADVANCE_BTN ='';
const CREATE_BTN = ''
const FILTER_BTN = '';
const FILTEROK_BTN ='';
const FILTERTAG_TXB = '';
const TAGS_SLC ='';
const SEARCHBAR_TXB ='';
const EXPIRYDATE_TXB ='';
const EXPIRYTIME_TXB ='';
const NEWURL_TXB ='';

class Profile extends Page{

    open() {

        return super.open('login');

    }

    async AccSettingBTNisDisplay(){

       return (await $(ACCSETTING_BTN)).isDisplayed();

    }

    async LinksisDisplayed(){

        return (await $(LINKSLIST)).isDisplayed();

    }

    async LinkSearchBTNisDisplayed(){

        return (await $(LINKSEARCH_BTN)).isDisplayed();

    }

    async URLAnalysisisDisplayed(){

        return (await $(URLANALYSIS)).isDisplayed();

    }

    async CreateNewLinkisDisplayed(){

        return (await $(CREATENEWLINK_BTN)).isDisplayed();

    }

    
    async EditLinkisDisplayed(){

        return (await $(EDITLINK_BTN)).isDisplayed();

    }

    async NotificationBTNisDisplayed(){

        return (await $(NOTICE_BTN)).isDisplayed();

    }
    
    async FeatureBTNisDisplayed(){

        return (await $(FEATURES_BTN)).isDisplayed();

    }

    async DestinationTXBisDisplayed(){

        return (await $(DESTINATION_TXB)).isDisplayed();

    }

    async LinkTitleTXBisDisplayed(){

        return (await $(LINKTITLE_TXB)).isDisplayed();

    }

    async LinkDomainSLCisDisplayed(){

        return (await $(LINKDOMAIN_SLC)).isDisplayed();

    }

    async LinkSlashTXBisDisplayed(){

        return (await $(LINKSLASH_TXB)).isDisplayed();

    }

    async TagSLCisDisplayed(){

        return (await $(TAG_SLC)).isDisplayed();

    }

    async AdavanceBTNisDisplayed(){

        return (await $(ADVANCE_BTN)).isDisplayed();

    }

    async ExpiryDateTXBisDisplayed(){

        return (await $(EXPIRYDATE_TXB)).isDisplayed();

    }

    async ExpiryTimeTXBisDisplayed(){

        return (await $(EXPIRYTIME_TXB)).isDisplayed();

    }

    async NewURLTXBisDisplayed(){

        return (await $(NEWURL_TXB)).isDisplayed();

    }
    

    async CreateLinkBTNisDisplayed(){

        return (await $(CREATENEWLINK_BTN)).isDisplayed();

    }

    async NoticeBTNclick(){

        return(await $(NOTICE_BTN)).click();

    }

    async LoginCredential(email, password){

        await (await $(EMAIL_TXB)).setValue(email);
        await (await $(PASSWORD_TXB)).setValue(password);
        await (await $(LOGIN_BTN)).click();

        return this;
    }

    async CreateNewLinkCredential(destination, title, domain, slash, tag){

        await(await $(CREATENEWLINK_BTN)).click();
        await(await $(DESTINATION_TXB)).setValue(destination);
        await(await $(LINKTITLE_TXB)).setValue(title);
        await(await $(LINKDOMAIN_SLC)).selectByVisibleText(domain);
        await(await $(LINKSLASH_TXB)).setValue(slash);
        await(await $(TAG_SLC)).selectByVisibleText(tag);

        return this;

    }

    async FilterCredential(tags, spectxt){

        await(await $(FILTER_BTN)).click();
        await(await $(FILTERTAG_TXB)).setValue(spectxt);
        await(await $(TAG_SLC)).selectByVisibleText(tags);//need to modify follow the website
        await(await $(FILTEROK_BTN)).click();

        return this;

    }

    async SearchCredential(search){

        await(await $(SEARCHBAR_TXB)).setValue(search);

        return this;

    }

    async LinkExpiry(date, time){

        await(await $(ADVANCE_BTN)).click();
        await(await $(EXPIRYDATE_TXB)).setValue(date);
        await(await $(EXPIRYTIME_TXB)).setValue(time);

        return this;
    }





}
export default new Profile;