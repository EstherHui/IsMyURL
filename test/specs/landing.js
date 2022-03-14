import LandingPage from '../flow/Landing';
import testdata from '../test_data/Landing001';

const data = testdata.credential;
const landingflow = new LandingPage(data);

describe ('Landing001 - ',() => {

    it ('T002 - shorten blank', async() => {
        
     await landingflow.ShortenBlank();
     await landingflow.verifyErrorMessage('Url Is Required')

    });

    it ('T003 - shorten invalid', async() => {
        
         await landingflow.ShortenInvalid();
         await landingflow.verifyInvalid('Invalid Url');
    
        });

    it('T004 - generate shorten link', async() => {

        await landingflow.ShortenLink();
        await landingflow.verifyShortenGenerate('Generate Successfully');

    });



});