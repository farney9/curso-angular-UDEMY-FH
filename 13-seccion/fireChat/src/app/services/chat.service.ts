import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Mensaje } from '../interfaces/mensaje.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  public chats: Mensaje[] = [];
  public user:any = {};

  constructor(private afs: AngularFirestore,
              public auth: AngularFireAuth) { 
    this.auth.authState.subscribe(usuario=>{
      console.log( 'Estado del usuario: ', usuario );
  
      if( !usuario ){
        return;
      }

      this.user.name = usuario.displayName;
      this.user.uid = usuario.uid;
      this.user.photoUrl = usuario.photoURL;
    })
  }

  login(provider: string) {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.auth.signOut();
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
