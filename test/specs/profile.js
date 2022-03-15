import Profilepage from  '../flow/Profile';
import testdata from '../test_data/Profile001';


const data = testdata.credential;
const profileflow = new Profilepage(data);

describe('Profile001 - Profile ', () => {
    

    it ('T001 - Verify Display', async() => {
        
        await profileflow.Login();
        await profileflow.verifyProfile();

    });

  

});


