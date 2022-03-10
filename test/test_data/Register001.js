import Credential from '../entity/credentialRegister';

const credential = new Credential();
credential.email = 'wohoo@gmail.com';
credential.password = 'Qwerty!23';

const data = {

    credential : credential

}

export default data;