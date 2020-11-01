import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(public _cs: ChatService) { }

  ngOnInit(): void {
  }

  onLogin(provider: string){
    console.log(provider);
    this._cs.login(provider);
  }

}
