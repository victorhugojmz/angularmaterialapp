export class Producto {
    id?: number;
    sku?: string;
    stock?: number;
    size? : string;
    nombre?: string;
    precio?: number;
    departamento?: string;
    descuento?: number;
    descripcion?: string;
    imagen?: string;
    imagenes: Imagen[];
    marca?: string;
    specs?: Spec[ ];
    constructor(public _id ?: number, public _sku?:  string, public _stock?: number, public _nombre?: string, public _precio?: number, public _departamento?: string, public _descuento?: number, public _descripcion?: string,public _imagen?: string, public _marca?:  string, public _imagenes?: Imagen[], public _specs?: Spec[]){ 
        this.id = _id;
        this.sku = _sku;
        this.stock = _stock;
        this.nombre = _nombre;
        this.precio = _precio;
        this.departamento = _departamento;
        this.descuento = _descuento;
        this.descripcion = _descripcion;
        this.imagen = _imagen;
        this.imagenes = _imagenes;
        this.marca = _marca;
        this.specs = _specs;
    }
 }
 export class Imagen { 
     url: string = '';
     descripcion: string = '';
     titulo: string = '';
}
export class Spec{
    nombre: string = '';
    descripcion: string = '';
}