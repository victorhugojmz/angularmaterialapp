export class Cliente {
    public id:  number;
    public nombre: string;
    public email: string;
    public direccion: string;
    public telefono: string;
    constructor(id: number, nombre: string , email: string, direccion: string, telefono: string){ 
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.direccion = direccion;
        this.telefono = telefono;
    }
}