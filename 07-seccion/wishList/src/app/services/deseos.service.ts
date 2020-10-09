import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];

  constructor() { 

    this.loadStorage();
    
    // const lista1 = new Lista('Reunir gemas del infinito');
    // const lista2 = new Lista('Seleccionar héroes a desaparecer');
    // this.listas.push(lista1, lista2);
  }
  
  crearLista( titulo: string){
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.saveStorage();
  }

  saveStorage(){
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  loadStorage(){

    if (localStorage.getItem('data')) {
      this.listas = JSON.parse(localStorage.getItem('data'));
    } else {
      this.listas = [];
    }
  }
}
