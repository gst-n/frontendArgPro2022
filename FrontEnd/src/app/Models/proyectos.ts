export class Proyectos {
    id?:number;
    nombre:string;
    descripcion:string;
    urlRepositorio:string;
    imgUrl:string;


    constructor(nombre:string, descripcion:string, urlRepositorio:string, imgUrl:string){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.urlRepositorio = urlRepositorio;
        this.imgUrl = imgUrl;
    }
}