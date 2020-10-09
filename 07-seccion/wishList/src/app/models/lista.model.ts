import { ListaItems } from './lista-item.model';



export class Lista {

    id: number;
    title: string;
    CreatedIn: Date;
    finishedIn: Date;
    isCompleted: boolean;
    items: ListaItems[];


    constructor ( caption: string) {

        this.title = caption;
        this.CreatedIn = new Date();
        this.isCompleted = false;
        this.items = [];
        this.id = new Date().getTime();

    }

}




