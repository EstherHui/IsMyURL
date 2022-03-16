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

describe('Profile003 - Filter Link ', () => {
    
    // it ('T012 - Link filter display', async() => {
        
    //     await profileflow.Login();
        

    // });
    
    it ('T013 - check the links from the link list by using filter method', async() => {
        
        await profileflow.Login();
        await profileflow.FilterLink(1);//if used tag change to 2 depends on website 
        
    });


});

describe('Profile004 - Search Link ', () => {
    

    it ('T013 - search the created link from their link list', async() => {
        
        await profileflow.Login();
        await profileflow.SearchLink();        

    });


});

describe('Profile005 - Notification ', () => {
    

    it ('T014 - read the received notification by click the Notification button', async() => {
        
        await profileflow.Login();
        await profileflow.Notice();

    });


});

describe('Profile006 - Link Expiry ', () => {
    

    it ('T015 - Link Expiry Display', async() => {
        
        await profileflow.Login();
        

    });

    it ('T016 - link expiry on the time', async() => {
        
        await profileflow.Login();
        

    });

    it ('T017 - shorten redirect user to the new link when the current link expiry', async() => {
        
        await profileflow.Login();
        

    });


});

describe('Profile006 - Link Analysia ', () => {
    

    it ('T018 - data analysis display', async() => {
        
        await profileflow.Login();
        

    });

    it ('T019 - data accuracy', async() => {
        
        await profileflow.Login();
        

    });

});

