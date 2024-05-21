import { AbstractControl } from '@angular/forms';

export class RegisterValidators{


    static isNameValid(control:AbstractControl){
        const value=control.value;
        const regex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]+$/
        const valid=regex.test(value)
        return valid? null:{InvalidInput:true}
    }

    static matchPasswords(control: AbstractControl) {

      const password = control.get('password')?.value;
      const confirmPassword = control.get('confirmPassword')?.value;
      if (!password || !confirmPassword){
        return {null_password: true};
      }
      if (password !== confirmPassword) {
        return {match_password: true};
      }
      return null;




    }

}