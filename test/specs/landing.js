import LandingPage from '../flow/Landing';
import testdata from '../test_data/Landing001';

const data = testdata.credential;
const landingflow = new LandingPage(data);

describe ('Landing002 - ', () => {

    // it ('T002 - shorten blank', async() => {
        
    //  await landingflow.ShortenBlank();
    //  await landingflow.verifyErrorMessage('Url Is Required')

    // });

    // it ('T003 - shorten invalid', async() => {
        
    //      await landingflow.ShortenInvalid();
    //      await landingflow.verifyInvalid('Invalid Url');
    
    //     });

    // it('T004 - generate shorten link', async() => {

    //     await landingflow.ShortenLink();
    //     await landingflow.verifyShortenGenerate('Generate Successfully');

    // });



});

describe ('Landing003 - ', () => {

    // it(' T005 - refer all supported features ', async() => {



    // });

    it(' T006 - Access to the Plan ', async() => {

        await landingflow.AccessPlan();// selector cannot found the button

    });

    it(' T007 - Access to the Plan ', async() => {

        await landingflow.AccessPlanGetStart();

    });

});