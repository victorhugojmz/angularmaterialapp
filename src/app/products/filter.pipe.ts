import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../products'
@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform {;
  transform(producto: Producto[],SearchTerm: string): Producto[] { 
      return SearchTerm.toLowerCase() ? producto.filter((producto: Producto) => producto.nombre.toLowerCase().indexOf(SearchTerm) !== -1) : producto;
  }
}