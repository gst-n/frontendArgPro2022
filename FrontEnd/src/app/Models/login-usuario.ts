export class LoginUsuario {
    nombreUsuario:String;
    password:String;

    constructor(_nombreUSuario:String, _password:String){
        this.nombreUsuario = _nombreUSuario;
        this.password = _password;
    }
}