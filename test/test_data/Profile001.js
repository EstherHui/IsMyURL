import Credential from "../entity/credentialLogin";

const credential = new Credential();
credential.email = 'cdef@gmail.com';
credential.password = 'Qwerty!23';
credential.destination = 'https://docs.google.com/spreadsheets/d/1gNhR1WuY1v_DgrL04qnIa27eD1AxNHcPi8SUPKalt0U/edit#gid=1353614065';
credential.title = 'hungry';
credential.domain ='isMyUrl';
credential.slash = 'TomatoCabbage';
credential.tag = '';
credential.invalidURL = 'Tomato+Cabbage+SliceChicken+Hotdog+Apple'

const data= {
    
    credential : credential
}

export default data;