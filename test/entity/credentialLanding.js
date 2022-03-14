export default class Credential{


    get link(){
        return this._link;
    }
    set link(value){
        this._link = value;
    }

    get invalidlink(){
        return this._invalidlink;
    }
    set invalidlink(value){
        this._invalidlink = value;
    }

    get email(){
        return this._email;
    }
    set email(value){
        this._email = value;
    }

    get invalidemail(){
        return this._invalidemail;
    }
    set invalidemail(value){
        this._invalidemail = value;
    }

    get subject(){
        return this._subject;
    }
    set subject(value){
        this._subject = value;
    }

    get description(){
        return this._description;
    }
    set description(value){
        this._description = value;
    }


}