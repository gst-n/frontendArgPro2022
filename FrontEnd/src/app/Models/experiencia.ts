export class Experiencia {
    id?:number;
    nombreE:string;
    descripcionE:string;

    constructor(_nombreE:string, _descripcionE:string){
        this.nombreE = _nombreE;
        this.descripcionE = _descripcionE;
    }
}