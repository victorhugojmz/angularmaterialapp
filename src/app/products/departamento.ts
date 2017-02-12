export class Departamento {
    public nombre: string;
    public descripcion ?: string;
    public hero: string;
    public imagenes: Array<string>;
    constructor(_nombre: string, _descripcion: string, _hero: string,_imagenes: string[]){
        this.nombre = _nombre;
        this.descripcion = _descripcion;
        this.hero = _hero;
        this.imagenes =  _imagenes;
    }  
}
export const departamentos: Departamento[ ] = [
    { nombre: "Clothing", descripcion: "lalalala" , hero: "https://dummyimage.com/500x500.jpg/5fa2dd/ffffff", imagenes: ["https://dummyimage.com/500x500.jpg/5fa2dd/ffffff", "https://dummyimage.com/500x500.jpg/5fa2dd/ffffff", "https://dummyimage.com/500x500.jpg/5fa2dd/ffffff"]},
    { nombre: "Sports", descripcion: "lalalala" , hero: "https://dummyimage.com/500x500.jpg/5fa2dd/ffffff", imagenes: ["https://dummyimage.com/500x500.jpg/5fa2dd/ffffff", "https://dummyimage.com/500x500.jpg/5fa2dd/ffffff", "https://dummyimage.com/500x500.jpg/5fa2dd/ffffff"]},
] 