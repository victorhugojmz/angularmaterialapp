import { Producto } from './../products';
export class Departamento {
    public nombre: string;
    public descripcion ?: string;
    public hero: string;
    public imagen: string;
    constructor(_nombre: string, _descripcion: string, _hero: string, _imagen: string){}  
}
export interface DepartamentData { 
  productos : Producto[];
  departamento:  Departamento;
}