import Credential from '../entity/credentialRegister';

const credential = new Credential();
credential.email = 'waow@gmail.com';
credential.password = 'As123!23';
credential.invalidemail = 'moo.gmail.com';
credential.existingemail= 'cdef@gmail.com';
credential.bpassword = 'as123123';
credential.cpassword = '123!23123';
credential.dpassword = '12312';
credential.epassword = '123123123';
credential.ConfirmPassword2 = 'Zxcv!2345'


const data = {

    credential : credential

}

export default data;