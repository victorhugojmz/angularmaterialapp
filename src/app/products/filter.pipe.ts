import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../products'
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(producto: Producto[],[term]){
    return producto.filter((producto: Producto) => producto.nombre.includes(term));
  }
}