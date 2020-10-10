import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent {
  
  // listas: Lista[] = [];
  @Input() isListTerminados = true;

  constructor( public deseosService: DeseosService,
               private router: Router) {}

  goToSelectedList( list: Lista) {

    if (this.isListTerminados) {
      this.router.navigateByUrl(`/tabs/tab2/add/${list.id}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/add/${list.id}`);
    }

    console.log(this.deseosService.listas);
    
  }

  // deleteList(lista: Lista) {
  //   this.deseosService.deleteList(lista.id);
  // }
               

}
