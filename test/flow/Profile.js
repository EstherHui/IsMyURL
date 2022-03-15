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

        let accset = await Profile.AccSettingBTNisDisplay();
        
        await expect(accset).toBeDisplayed;

    }

}