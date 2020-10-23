import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  isJimenez(control: FormControl): {[s:string]: boolean} {

    if (control.value?.toLowerCase() === 'jimenez') {
      return {isJimenez: true}
    }
    return null;
  }
}
