import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DeseosService } from '../../services/deseos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  constructor( public deseosService: DeseosService,
               private router: Router,
               private alertController: AlertController) {
    
  }

  async addList(){

    const alert = await this.alertController.create({
      header: 'Nueva Lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Ingrese el nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Agregar',
          handler: ( data ) => {
            // console.log(data);
            if ( data.titulo.length === 0) {
              return;
            }
              const listId = this.deseosService.crearLista( data.titulo );
              // tengo que crear la lista
              this.router.navigateByUrl(`/tabs/tab1/add/${listId}`);
            
          }
        }
      ]
    });

    await alert.present();
  }



}
