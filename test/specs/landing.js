// import LandingPage from '../flow/Landing';
// import testdata from '../test_data/Landing001';

// const data = testdata.credential;
// const landingflow = new LandingPage(data);

// describe ('Landing002 - Shorten URL ', () => {

//     // it ('T002 - shorten blank', async() => {
        
//     //  await landingflow.ShortenBlank();
//     //  await landingflow.verifyErrorMessage('Url Is Required')

//     // });

//     // it ('T003 - shorten invalid', async() => {
        
//     //      await landingflow.ShortenInvalid();
//     //      await landingflow.verifyInvalid('Invalid Url');
    
//     //     });

//     // it('T004 - generate shorten link', async() => {

//     //     await landingflow.ShortenLink();
//     //     await landingflow.verifySuccess('Generate Successfully');

//     // });



// });

// describe ('Landing003 - Feature ', () => {

//     // it(' T005 - refer all supported features ', async() => {



//     // });


// });

// describe ('Landing004 - Plan ', () => {

//     // it(' T006 - Access to the Plan ', async() => {

//     //     await landingflow.AccessPlan();// selector cannot found the button

//     // });

//     // it(' T007 - Access to the Plan ', async() => {

//     //     await landingflow.AccessPlanGetStart();

//     // });

// });

// describe ('Landing005 - Contact Us ', () => {

//     it(' T008 - Access to the Contact Us display ', async() => {

//         await landingflow.AccessContactUs();
//         await landingflow.verifyContactUsAccess();

//     });

//     // it(' T009 - Verify Contact Us display ', async() => {

//     //     await landingflow.AccessContactUs();
//     //     await landingflow.verifyContactUsDisplayed();

//     // });

//     it(' T010 - Submit form with all blank field ', async() => {

//         await landingflow.AccessContactUs();
//         await browser.pause('1000');
//         await landingflow.ContactUsBlank();
//         await landingflow.verifyContactUsMessage('Is Required');

//     });

//     it(' T011 - Submit form with blank email ', async() => {

//         await landingflow.AccessContactUs();
//         await browser.pause('1000');
//         await landingflow.ContactUsBlankEmail();
//         await landingflow.verifyContactUsMessage('Email Is Required');

//     });

//     it(' T012 - Submit form with blank subject ', async() => {

//         await landingflow.AccessContactUs();
//         await browser.pause('1000');
//         await landingflow.ContactUsBlankSubject();
//         await landingflow.verifyContactUsMessage('Subject Is Required');

//     });

//     it(' T013 - Submit form with blank description ', async() => {

//         await landingflow.AccessContactUs();
//         await browser.pause('1000');
//         await landingflow.ContactUsBlankDescript();
//         await landingflow.verifyContactUsMessage('Description Is Required');

//     });

//     it(' T014 - Submit form with invalid email ', async() => {

//         await landingflow.AccessContactUs();
//         await browser.pause('1000');
//         await landingflow.ContactUsInvalidEmail();
//         await landingflow.verifyContactUsMessage('Invalid Email Format');

//     });

//     it(' T015 - Submit form success ', async() => {

//         await landingflow.AccessContactUs();
//         await browser.pause('1000');
//         await landingflow.ContactUsSuccess();
//         await landingflow.verifySuccess('successfully submitted');

//     });
   
// });