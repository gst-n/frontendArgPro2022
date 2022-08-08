export class Persona {
    apellido:string;
    descripcion:string;
    id?:number;
    img:string;
    nombre:string;


    constructor(apellido:string, descripcion:string, img:string, nombre:string){
        this.apellido = apellido;
        this.descripcion = descripcion;
        this.img = img;
        this.nombre = nombre;
    }

}