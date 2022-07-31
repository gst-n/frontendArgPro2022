export class Persona {
    id?:number;
    nombre:string;
    apellido:string;
    img:string;


    constructor(_nombre:string, _apellido:string, _img:string){
        this.nombre = _nombre;
        this.apellido = _apellido;
        this.img = _img;
    }

}