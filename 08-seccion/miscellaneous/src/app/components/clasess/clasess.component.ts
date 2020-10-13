import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clasess',
  templateUrl: './clasess.component.html'
})
export class ClasessComponent implements OnInit {

  alerta:string = "alert-danger"
  loading:boolean = false;

  propiedades:Object = {
    danger: false 
  }
  constructor() { }

  ngOnInit(): void {
  }

  ejecutar(){
    this.loading = true;
    setTimeout(() => this.loading = false, 3000);

  }

}
