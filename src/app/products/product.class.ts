export class Producto {
    id: number;
    sku: string;
    stock: number;
    nombre: string;
    precio: string;
    departamento:  string;
    descuento?: number;
    detalles: string;
    imagen: string;
    marca: string;
    caracteristicas?: Object[];
    constructor(public _id : number, public _sku:  string, public _stock: number, public _nombre: string, public _precio: string, public _departamento: string, public _descuento: number, public _detalles: string,public _imagen: string, public _marca:  string, public _caracteristicas: Object[]){ 
        this.id = _id;
        this._sku = _sku;
        this._stock = _stock;
        this.nombre = _nombre
        this.precio =  _precio
        this.departamento =   _departamento;
        this.descuento =  _descuento;
        this.detalles =  _detalles;
        this.imagen =  _imagen;
        this.marca =    _marca;
    }
 }