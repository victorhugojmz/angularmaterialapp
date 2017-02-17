export class Producto {
    id?: number;
    sku?: string;
    stock?: number;
    nombre?: string;
    precio?: number;
    departamento?:  string;
    descuento?: number;
    detalles?: string;
    imagen?: string;
    imagenes: Imagen[];
    marca?: string;
    caracteristicas?: Object[];
    constructor(public _id ?: number, public _sku?:  string, public _stock?: number, public _nombre?: string, public _precio?: number, public _departamento?: string, public _descuento?: number, public _detalles?: string,public _imagen?: string, public _marca?:  string, public _imagenes?: Imagen[] , public _caracteristicas?: Object[]){ 
        this.id = _id;
        this.sku = _sku;
        this.stock = _stock;
        this.nombre = _nombre;
        this.precio =  _precio;
        this.departamento =   _departamento;
        this.descuento =  _descuento;
        this.detalles =  _detalles;
        this.imagen =  _imagen;
        this.imagenes = _imagenes;
        this.marca =    _marca;
    }
 }
 export class Imagen { 
     url: string;
     descripcion: string;
     titulo: string;
     constructor(_url, _descripcion, _titulo){
         this.url = _url;
         this.titulo = _titulo;
         this.descripcion = _descripcion;
     } 
    }