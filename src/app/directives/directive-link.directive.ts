import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirectiveLink]',
})
export class DirectiveLinkDirective {
  constructor(private element: ElementRef) {}

  @HostListener('mouseover') onMouseOver() {
    this.element.nativeElement.style.background = '#d58383';
    this.element.nativeElement.style.fontSize = '18px';
    this.element.nativeElement.style.fontWeight = '600';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.background = '';
    this.element.nativeElement.style.fontSize = '16px';
    this.element.nativeElement.style.fontWeight = '300';
  }
}
