import Credential from "../entity/credentialLogin";

const credential = new Credential();
credential.email = 'cdef@gmail.com';
credential.password = 'Qwerty!23';


const data= {
    
    credential : credential
}

export default data;