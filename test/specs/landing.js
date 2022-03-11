import LandingPage from '../flow/Landing';
import testdata from '../test_data/Landing001';

const data = testdata.credential;
const landingflow = new LandingPage(data);

describe ('Landing001 - ',() => {

    it ('T002 - shorten blank', async() => {
        
     await landingflow.ShortenBlank();

    });

});