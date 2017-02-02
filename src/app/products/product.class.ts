export class Producto {
    id: number;
    sku: number;
    stock: number;
    nombre: string;
    precio: string;
    departamento:  string;
    descuento?: number;
    detalles: string;
    imagen: string;
    marca: string;
    caracteristicas: Object[]
 }