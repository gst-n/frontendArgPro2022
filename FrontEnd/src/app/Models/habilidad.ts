export class Habilidad {
    id?:number;
    nombre:string;
    tipo:string;
    porcentajeH:number


    constructor(nombre:string, tipo:string, porcentajeh:number){
        this.nombre = nombre;
        this.tipo = tipo;
        this.porcentajeH = porcentajeh;
    }
}