import { Directive, HostBinding, HostListener } from '@angular/core';
@Directive({
  selector: '[ngdropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') get opened(){
    return this.isOpen;
  }
  @HostListener('click') open(){ 
    this.isOpen = true;
  }
  @HostListener('mouseover') close(){ 
    this.isOpen = false;
  } 
   private isOpen = false;
}