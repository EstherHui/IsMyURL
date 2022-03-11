import Credential from '../entity/credentialRegister';

const credential = new Credential();
credential.email = 'wohoo@gmail.com';
credential.password = 'Qwerty!23';
credential.invalidemail = 'wohoo.gmail.com';

const data = {

    credential : credential

}

export default data;