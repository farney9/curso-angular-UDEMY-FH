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

  crearLista(titulo: string) {
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.saveStorage();

    return nuevaLista.id;
  }

  deleteList(idx: number) {
    this.listas = this.listas.filter(listInArr => listInArr.id !== idx);
    console.info(this.listas);
    this.saveStorage();
  }

  // deleteList(lista: Lista) {
  //   this.listas = this.listas.filter(listaData => {

  //     return listaData.id !== lista.id;
  //   });
  //   console.info(this.listas);
  //   this.saveStorage();
  // }


  getList(id: string | number) {
    // obligo que el id se convierta en un número
    id = Number(id);
    return this.listas.find(listaData => listaData.id === id);
  }

  saveStorage() {
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  loadStorage() {

    if (localStorage.getItem('data')) {
      this.listas = JSON.parse(localStorage.getItem('data'));
    } else {
      this.listas = [];
    }
  }
}
