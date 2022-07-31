export class Experiencia {
    id:number;
    empresa:string;
    anio:number;
    cargo:string;
    locacion:string;


    constructor(_id:number, _empresa:string, _anio:number, _cargo:string, _locacion:string){
        this.id = _id;
        this.empresa = _empresa;
        this.anio = _anio;
        this.cargo = _cargo;
        this.locacion = _locacion; 
    }
}