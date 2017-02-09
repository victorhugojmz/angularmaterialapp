export class Departamento {
    public nombre: string;
    public descripcion ?: string;
    public hero: string;
    public imagenes: Array<string>;
    public marca: Marca[];
    constructor(_nombre: string, _descripcion: string, _hero: string,_imagenes: string[], _marca: Marca[]){
        this.nombre = _nombre;
        this.descripcion = _descripcion;
        this.hero = _hero;
        this.imagenes =  _imagenes;
        this.marca = _marca;
    }  
}
export class Marca{
    nombre: string;
    descripcion: string;
    total_articulos: string;
}