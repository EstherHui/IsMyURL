import Register from '../flow/Register';
import testdata from '../test_data/Register001';

const data = testdata.credential;
const registerflow = new Register(data);

describe('Register - ', () => {

    // it('T001 - Register Page display' , async() => {

    //     const register = new Register();
    //     await register.verifyRegisterDisplay();

    // });

    it('T002 - Register with all blank field', async() => {

        
        await registerflow.RegisterWithBlank();
        await registerflow.verifyErrorMessage('Is Required');

    });

    it('T003 - Register with blank email', async() => {

        
        await registerflow.RegisterWithBlankEmail();
        await registerflow.verifyErrorMessage('Email Is Required');

    });

});