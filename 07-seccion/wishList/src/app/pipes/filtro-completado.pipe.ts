import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtroCompletado',
  pure: false
})
export class FiltroCompletadoPipe implements PipeTransform {

  transform(listas: Lista[], completado: boolean): Lista[] {
    
    if (completado === true) {
      return listas.filter( listas => listas.isCompleted === true);
    } else {
      return listas.filter( listas => listas.isCompleted === false);
    }
  }
}
