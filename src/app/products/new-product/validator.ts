import { AbstractControl , ValidatorFn } from '@angular/forms'; 
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const name = control.value;
    const nombre_prohibido = nameRe.test(name);
    return nombre_prohibido ? {'forbiddenName': {name}} : null;
  };
}