import Credential from "../entity/credentialLogin";

const credential = new Credential();
credential.email = 'wohoo@gmail.com';
credential.password = 'Qwerty!23';
credential.invalid_email = 'cdef.gmail.com';
credential.invalid_password = '12345678';
credential.emailB = 'azsxd@gmail.com';
credential.passwordB = 'poilk!23';
credential.secondemail = 'pop@gmail.com';
credential.secondpassword = 'Qwerty!23';


const data= {
    
    credential : credential
}

export default data;