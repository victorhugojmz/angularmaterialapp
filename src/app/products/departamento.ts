export class Departamento {
    public nombre: string;
    public descripcion ?: string;
    public hero?: string;
    public imagenes?: Array<string>;
    constructor(_nombre: string, _descripcion: string, _hero: string,_imagenes: string[]){
        this.nombre = _nombre;
        this.descripcion = _descripcion;
        this.hero = _hero;
        this.imagenes =  _imagenes;
    }  
}