import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirectiveInput]'
})
export class DirectiveInputDirective {

  constructor(private element: ElementRef) {
    
    this.element.nativeElement.style.border = '2px solid red';
  }

  @HostListener('input', ['$event']) onStyleInput(event: Event) : void {
      const inputValue = this.element.nativeElement.value;
    if (inputValue === '')
    {
      this.element.nativeElement.style.border = '2px solid red';
    } else {
      this.element.nativeElement.style.border = '1px solid #9c9c9c';
    }
  }
}

