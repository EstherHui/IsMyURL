export default class Credentia{

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

    get invalid_password(){
        return this._invalid_password;
    }
    set invalid_password(value){
        this._invalid_password = value;
    }

    get newpassword(){
        return this._newpassword;
    }
    set newpassword(value){
        this._newpassword = value;
    }

    get passwordB(){
        return this._passwordB;
    }
    set passwordB(value){
        this._passwordB = value;
    }

}