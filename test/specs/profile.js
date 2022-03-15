import Profilepage from  '../flow/Profile';
import testdata from '../test_data/Profile001';


const data = testdata.credential;
const profileflow = new Profilepage(data);

describe('Profile001 - Profile ', () => {
    

    it ('T001 - Verify Display', async() => {
        
        await profileflow.Login();
        await profileflow.verifyProfile();//return not display

    });

});

describe('Profile002 - Create New Link ', () => {
    

    it ('T002 - Verify create new link display', async() => {
        
        await profileflow.Login();
        await profileflow.verifyCreteNewLink();

    });

    it ('T003 - Create new link with blank all field', async() => {
        
        await profileflow.Login();
        await profileflow.CreateLink(1);

    });

    it ('T004 - Create new link with blank destination URL', async() => {
        
        await profileflow.Login();
        await profileflow.CreateLink(2);

    });

    it ('T005 - Create new link with blank link title', async() => {
        
        await profileflow.Login();
        await profileflow.CreateLink(3);

    });

    it ('T006 - Create new link with blank link domain', async() => {
        
        await profileflow.Login();
        await profileflow.CreateLink(4);

    });

    it ('T007 - Create new link with blank slash tag', async() => {
        
        await profileflow.Login();
        await profileflow.CreateLink(5);

    });

    it ('T008 - Create new link with invalid destination link', async() => {
        
        await profileflow.Login();
        await profileflow.CreateLink(6);

    });

    it ('T009 - Create new link successfully', async() => {
        
        await profileflow.Login();
        await profileflow.CreateLink(7);

    });

    it ('T011 - Verify the created date and time displayed correctly', async() => {
        
        await profileflow.Login();
        await profileflow.CreateLink(8);

    });


});


