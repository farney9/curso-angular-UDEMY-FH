import { Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonItemSliding, IonList } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent {
  
  @ViewChild('slidingItems') slidingItems: IonItemSliding;
  @Input() isListTerminados = true;

  constructor( public deseosService: DeseosService,
               private router: Router,
               private alertController: AlertController) {}

  goToSelectedList( list: Lista) {

    if (this.isListTerminados) {
      this.router.navigateByUrl(`/tabs/tab2/add/${list.id}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/add/${list.id}`);
    }

    console.log(this.deseosService.listas);
    
  }

  async goToEditList( lista: Lista){

    const alert = await this.alertController.create({
      header: 'Editar lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Ingrese el nombre de la lista',
          value: lista.title
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.slidingItems.closeOpened();
            // console.log('Cancelar');
          }
        },
        {
          text: 'Save',
          handler: ( data ) => {
            if ( data.titulo.length === 0) {
              return;
            }
            lista.title = data.titulo;
            this.deseosService.saveStorage();
            this.slidingItems.closeOpened();
            // console.log(data);
          }
        }
      ]
    });

    await alert.present();
  }
}
