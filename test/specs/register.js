import Register from '../flow/Register';
import testdata from '../test_data/Register001';

describe('Register - ', () => {

    // it('T001 - Register Page display' , async() => {

    //     const register = new Register();
    //     await register.verifyRegisterDisplay();

    // });

    it('T002 - Register with all blank field', async() => {

        const allblank = testdata.credential;
        const register = new Register(allblank);
        await register.RegisterWithBlank();

    });

});