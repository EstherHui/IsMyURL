import Credential from "../entity/credentialLogin";

const credential = new Credential();
credential.email = 'waow03@gmail.com';
credential.password = 'As123!23';
credential.invalid_password = '12345678';
credential.newpassword = 'Qwerty!23';
credential.passwordB = 'Asdfgh!23';


const data= {
    
    credential : credential
}

export default data;