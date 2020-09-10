import { Directive, ElementRef, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightV3]'
})
export class HighlightV3Directive {

  constructor(private el: ElementRef) { }

  @Input('appHighlightV3') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  @HostBinding() class: String = 'some-test-class';

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
