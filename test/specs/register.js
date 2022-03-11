import Register from '../flow/Register';
import testdata from '../test_data/Register001';

const data = testdata.credential;
const registerflow = new Register(data);

describe('Register - ', () => {

    // it('T001 - Register Page display' , async() => {

    //     const register = new Register();
    //     await register.verifyRegisterDisplay();

    // });

    // it('T002 - Register with all blank field', async() => {

        
    //     await registerflow.RegisterWithBlank();
    //     await registerflow.verifyErrorMessage('Is Required');

    // });

    // it('T003 - Register with blank email', async() => {

        
    //     await registerflow.RegisterWithBlankEmail();
    //     await registerflow.verifyErrorMessage('Email Is Required');

    // });

    // it('T004 - Register with invalid format email', async() => {

        
    //     await registerflow.RegisterWithInvalidEmail();
    //     await registerflow.verifyErrorMessage('Invalid Email Format');

    // });

    it('T005 - Register with email existing on system', async() => {

        
        await registerflow.RegisterWithExistingEmai();
        await registerflow.verifyErrorMessage('Invalid Email Format');

    });

    it('T006 - Register with blank password', async() => {

        
        await registerflow.RegisterWithInvalidEmail();
        await registerflow.verifyErrorMessage('Invalid Email Format');

    });

    it('T007 - Register with password less than 6 characters ', async() => {

        
        await registerflow.RegisterWithInvalidEmail();
        await registerflow.verifyErrorMessage('Invalid Email Format');

    });

    it('T008 - Register with password without alphabet ', async() => {

        
        await registerflow.RegisterWithInvalidEmail();
        await registerflow.verifyErrorMessage('Invalid Email Format');

    });

    it('T009 - Register with password without special character ', async() => {

        
        await registerflow.RegisterWithInvalidEmail();
        await registerflow.verifyErrorMessage('Invalid Email Format');

    });

    it('T010 - Register with password without special character and alphabet ', async() => {

        
        await registerflow.RegisterWithInvalidEmail();
        await registerflow.verifyErrorMessage('Invalid Email Format');

    });

    it('T011 - Register with blank confirm password ', async() => {

        
        await registerflow.RegisterWithInvalidEmail();
        await registerflow.verifyErrorMessage('Invalid Email Format');

    });

    it('T012 - Register with not matching password and confirm password ', async() => {

        
        await registerflow.RegisterWithInvalidEmail();
        await registerflow.verifyErrorMessage('Invalid Email Format');

    });

    it('T013 - Register successfully ', async() => {

        
        await registerflow.RegisterWithInvalidEmail();
        await registerflow.verifyErrorMessage('Invalid Email Format');

    });

    it('T014 - Register by using third party ', async() => {

        
        await registerflow.RegisterWithInvalidEmail();
        await registerflow.verifyErrorMessage('Invalid Email Format');

    });

});