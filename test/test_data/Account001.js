import Credential from "../entity/credentialLogin";

const credential = new Credential();
credential.email = 'waow03@gmail.com';
credential.password = 'As123!23';
credential.invalid_password = '12345678';
credential.newpassword = 'Qwerty!23';
credential.passwordB = 'Asdfgh!23';
credential.invalidemail = 'waow003gmail.com';
credential.newemail = 'waow3@gmail.com';
credential.verifycodeA = '1';
credential.verifycodeB = '2';
credential.verifycodeC = '3';
credential.verifycodeD = '4';
credential.verifycodeE = '5';
credential.verifycodeF = '6';


const data= {
    
    credential : credential
}

export default data;