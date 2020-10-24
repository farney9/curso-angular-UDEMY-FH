import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

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

  MatchPassword(AC: AbstractControl) {
    let password = AC.get('passwords.password').value; // to get value in input tag
    let confirmPassword = AC.get('passwords.passwordComfirm').value; // to get value in input tag
     if(password != confirmPassword) {
        //  console.log('false');
         AC.get('passwords.passwordComfirm').setErrors( {MatchPassword: true} )
     } else {
        //  console.log('true');
         return null
     }
 }

}
