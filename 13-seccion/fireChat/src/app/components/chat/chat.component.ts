import { Component } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [
  ]
})
export class ChatComponent {

  mensaje: string = "";

  constructor(public _cs: ChatService) {
    this._cs.uploadMessages()
            .subscribe();
   }

  sendMessage(){
    console.log(this.mensaje);

    if (this.mensaje.length === 0) {
      return;
    }
    this._cs.addMessage(this.mensaje)
            .then(() => this.mensaje="")
            .catch((err) => console.error('Error al enviar', err));
  }

}
