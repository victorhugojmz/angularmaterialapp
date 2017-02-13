import { Directive, ElementRef , Input , HostListener} from '@angular/core';

@Directive({
  selector: '[highlightDirective]'
})
export class HighlightDirective {
  @Input() highlightColor: string;
  constructor(private _elementRef : ElementRef) { }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }  
  private highlight(color: string) {
    this._elementRef.nativeElement.style.backgroundColor = color;
  }
}