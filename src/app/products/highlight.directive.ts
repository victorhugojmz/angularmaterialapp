import { Directive, ElementRef , Input , HostListener} from '@angular/core';

@Directive({
  selector: '[highlightDirective]'
})
export class HighlightDirective {
  @Input('highlightDirective') highlightColor: string;
  constructor(private _elementRef : ElementRef) { }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'red');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }  
  private highlight(color: string) {
    this._elementRef.nativeElement.style.backgroundColor = color;
  }
}