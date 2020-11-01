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
    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref => ref.orderBy('fecha', 'asc').limitToLast(5));
    return this.itemsCollection.valueChanges().pipe(
      map((mensajes:Mensaje[]) => {
        console.log(mensajes);
        this.chats = mensajes;
      })
    )
  }

  addMessage( texto: string){
    //TODO falta el uid del usuario
    let mensaje: Mensaje = {
      nombre :'Demo',
      mensaje: texto,
      fecha: new Date().getTime()
    }

    return this.itemsCollection.add(mensaje)

  }
}
