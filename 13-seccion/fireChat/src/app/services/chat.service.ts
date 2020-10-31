import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Mensaje } from '../interfaces/mensaje.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  public chats: Mensaje[] = [];
  constructor(private afs: AngularFirestore) { 
  }
  
  uploadMessages(){
    this.itemsCollection = this.afs.collection<Mensaje>('chats');
    return this.itemsCollection.valueChanges().pipe(
      map((mensajes:Mensaje[]) => {
        console.log(mensajes);
        this.chats = [];
        for (let mensaje of mensajes) {
          this.chats.unshift(mensaje);
        }
        return this.chats;        
      })
    )
  }

  addMessage( texto: string){
    //TODO falta el uid del usuario
    let mensaje: Mensaje = {
      nombre :'Demo',
      mensaje: texto,
      fecha: new Date().getDate()
    }

    return this.itemsCollection.add(mensaje)

  }
}
