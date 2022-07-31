export interface IProgress {
    percent:number;
    radius:number;
    outerStrokeWidth:number;
    innerStrokeWidth:number;
    outerStrokeColor:string;
    innerStrokeColor:string;
    animation?:boolean;
    animationDuration:number;
    title:string;
}