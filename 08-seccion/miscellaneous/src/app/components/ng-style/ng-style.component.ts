import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamanio">
      Hola mundo... esto es una etiqueta
    </p>

    <div class="btn-group mr-2" role="group">
    <button class="btn btn-primary" type="button" (click)="increseSize()">
      <i class="fas fa-plus"></i>  Increase size
    </button>
  </div>
  <div class="btn-group mr-2" role="group">
    <button class="btn btn-primary" type="button" (click)="decreseSize()">
      <i class="fas fa-minus"></i>  Decrease size
    </button>
  </div>

  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  tamanio: number = 20;

  constructor() { }

  increseSize(){
    this.tamanio += 5;
  }
  decreseSize(){
    this.tamanio -= 5;
  }

  ngOnInit(): void {
  }

}
