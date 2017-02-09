export class Marca{
    nombre: string;
    descripcion: string;
    total_articulos: string;
 }
export class Departamento extends Marca {
    nombre: string;
    descripcion: string;
    hero: string;
    imagenes: Array<string>;
    marca: Marca[];
    
}