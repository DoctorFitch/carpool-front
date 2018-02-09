import { Directive, ElementRef, HostListener, Input, Renderer, OnInit, OnChanges } from '@angular/core';

@Directive({
  selector: '[appAutoSize]'
})
export class AutosizeDirective implements OnInit, OnChanges {
  private defaultHeight = 210;
  @Input() appAutoSize: string;
  @Input() factor: number;
  constructor(private el: ElementRef, private renderer: Renderer) { }

  ngOnInit() {
    this.computeHeight(+this.appAutoSize);
  }

  ngOnChanges(changes) {
    if (changes.hasOwnProperty('appAutoSize') && changes['appAutoSize'].currentValue) {
      this.computeHeight(+this.appAutoSize);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.computeHeight(+this.appAutoSize);
  }

  private computeHeight(delta: number = this.defaultHeight) {
    const factor = this.factor || 1;
    this.renderer.setElementStyle(this.el.nativeElement, 'height', (window.innerHeight - delta) * factor + 'px');
  }
}

