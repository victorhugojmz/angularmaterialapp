import { Producto } from './../products';
export class Departamento {
    public nombre: string;
    public descripcion ?: string;
    public hero: string;
    public imagen: string;
    constructor(_nombre: string, _descripcion: string, _hero: string, _imagen: string){
        this.nombre = _nombre;
        this.descripcion = _descripcion;
        this.hero = _hero;
        this.imagen = _imagen;
    }  
}
export interface DepartamentData { 
  productos : Producto[];
  departamento:  Departamento;
} 