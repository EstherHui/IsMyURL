import Profile from '../pageobjects/profile.page';

export default class Profilepage{

    constructor(testdata) {
        this._testdata = testdata;
      }

      async Login(){

        await Profile.open();
        await Profile.LoginCredential(this._testdata.email, this._testdata.password);

    }

    async verifyProfile(){

        await expect(await Profile.LinksisDisplayed()).toBeDisplayed();
        await expect(await Profile.LinkSearchBTNisDisplayed()).toBeDisplayed();
        await expect(await Profile.URLAnalysisisDisplayed()).toBeDisplayed();
        await expect(await Profile.CreateNewLinkisDisplayed()).toBeDisplayed();
        await expect(await Profile.EditLinkisDisplayed()).toBeDisplayed();
        await expect(await Profile.AccSettingBTNisDisplay()).toBeDisplayed();
        await expect(await Profile.NotificationBTNisDisplayed()).toBeDisplayed();
        await expect(await Profile.FeatureBTNisDisplayed()).toBeDisplayed();

    }

    async verifyCreateNewLink(){

        await expect(await Profile.DestinationTXBisDisplayed()).toBeDisplayed();
        await expect(await Profile.LinkTitleTXBisDisplayed()).toBeDisplayed();
        await expect(await Profile.LinkDomainSLCisDisplayed()).toBeDisplayed();
        await expect(await Profile.LinkSlashTXBisDisplayed()).toBeDisplayed();
        await expect(await Profile.TagSLCisDisplayed()).toBeDisplayed();
        await expect(await Profile.AdavanceBTNisDisplayed()).toBeDisplayed();
        await expect(await Profile.CreateLinkBTNisDisplayed()).toBeDisplayed();


    }

    async CreateLink(choose){

        if(choose ==1){
            await Profile.CreateNewLinkCredential(null, null, null, null, null);
        }
        
        else if (choose == 2){
            await Profile.CreateNewLinkCredential(null, this._testdata.title, this._testdata.domain, this._testdata.slash, this._testdata.tag);
        }

        else if (choose == 3){
            await Profile.CreateNewLinkCredential(this._testdata.destination, null, this._testdata.domain, this._testdata.slash, this._testdata.tag);
        }

        else if (choose == 4){
            await Profile.CreateNewLinkCredential(this._testdata.destination, this._testdata.title, null, this._testdata.slash, this._testdata.tag);
        }

        else if (choose == 5){
            await Profile.CreateNewLinkCredential(this._testdata.destination, this._testdata.title, this._testdata.domain, null, this._testdata.tag);
        }

        else if (choose == 6){
            await Profile.CreateNewLinkCredential(this._testdata.destination, this._testdata.title, this._testdata.domain, this._testdata.slash, null);
        }

        else if (choose ==7){
            await Profile.CreateNewLinkCredential(this._testdata.invalidURL, this._testdata.title, this._testdata.domain, this._testdata.slash, this._testdata.tag);
        }

        else {
            await Profile.CreateNewLinkCredential(this._testdata.destination, this._testdata.title, this._testdata.domain, this._testdata.slash, this._testdata.tag);
        }
    }



}