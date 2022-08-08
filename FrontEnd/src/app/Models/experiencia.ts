export class Experiencia {
    id?:number;
    nombreE:string;
    descripcionExp:string;

    constructor(_nombreE:string, _descripcionExp:string){
        this.nombreE = _nombreE;
        this.descripcionExp = _descripcionExp;
    }
}