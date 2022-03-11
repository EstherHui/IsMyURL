export default class Credential {

    get email(){
        return this._email;
    }
    set email(value){
        this._email = value;
    }

    get password(){
        return this._password;
    }
    set password(value){
        this._password = value;
    }

    get invalidemail(){
        return this._invalidemail
    }

    set invalidemail(value){
        this._invalidemail = value;
    }

}