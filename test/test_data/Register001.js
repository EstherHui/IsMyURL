import Credential from '../entity/credentialRegister';

const credential = new Credential();
credential.email = 'waow05@gmail.com';
credential.password = 'As123!23';
credential.invalidemail = 'moo.gmail.com';
credential.existingemail= 'cdef@gmail.com';
credential.bpassword = 'as123123';
credential.cpassword = '123!23123';
credential.dpassword = '123a!';
credential.epassword = '123123123';
credential.ConfirmPassword2 = 'Zxcv!2345'
credential.verifycodeA = '1';
credential.verifycodeB = '2';
credential.verifycodeC = '3';
credential.verifycodeD = '4';
credential.verifycodeE = '5';
credential.verifycodeF = '6';


const data = {

    credential : credential

}

export default data;