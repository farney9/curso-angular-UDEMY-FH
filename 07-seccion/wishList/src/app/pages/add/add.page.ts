import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaItems } from 'src/app/models/lista-item.model';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  myList: Lista;
  itemName: string = '';

  constructor( private deseosService: DeseosService,
               private route: ActivatedRoute) {
    
    const myListId = this.route.snapshot.paramMap.get('listId');

    this.myList = this.deseosService.getList(myListId);
    // console.log(this.myList);
    
  }

  addItem (){
    
    if (this.itemName.length !== 0) {
      const newItem = new ListaItems(this.itemName);
      this.myList.items.push(newItem);
      this.itemName = '';
      this.deseosService.saveStorage();
    }
    return;
  }

  ngOnInit() {
  }

}
