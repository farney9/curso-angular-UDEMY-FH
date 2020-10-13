import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[color]'
})
export class CambioCssDirective {

  constructor( private el: ElementRef) { 
    console.log('Directiva llamada');
    
  }
  @Input("color") nuevoColor:string;

  @HostListener('mouseenter') mouseEntro() {
    
    this.resaltar(this.nuevoColor || null)
  }
  @HostListener('mouseleave') mouseSalio() {
    this.resaltar(null)
  }

  private resaltar(color:string){
    this.el.nativeElement.style.color = color;
    
  }

}
