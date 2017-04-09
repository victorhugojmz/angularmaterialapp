import { Departamento } from '../products';
export const departamentosQuerySet = [
        { 
          nombre: "Baby", 
          descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet, magna in aliquam volutpat.", 
        },
        { 
          nombre: "Women", 
          descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet, magna in aliquam volutpat.",
        },    
        { nombre: "Men", 
          descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet, magna in aliquam volutpat.", 
        }, 
        { 
          nombre: "Kids", 
          descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet, magna in aliquam volutpat.", 
        }
   ];
export const departamentosList = departamentosQuerySet.map(departamento => departamento.nombre);