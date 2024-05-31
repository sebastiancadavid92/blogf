
import { Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators,FormControl } from '@angular/forms';
import{RegisterValidators} from '../../shared/validators/namevalidator'
import {SingupService}from '../../services/singup/singup.service'
import { Subscription } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import swal from 'sweetalert2';
import{Inject} from'@angular/core'
import {MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';


import {MatIconModule} from '@angular/material/icon';

import {MatInputModule} from '@angular/material/input';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,MatFormField,MatIconModule,MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm:FormGroup;
  
  constructor()
    {

    this.loginForm=new FormGroup(
      {
        email: new FormControl('',[Validators.required,Validators.pattern(/^[a-z_0-9-.]+@[a-z]+.com$/)]),
        password: new FormControl('',[Validators.required]),

      }
    )

  }

  send(event:Event){

  }

  get email(){
    return this.loginForm.get('email')!
  }

  get password(){
    return this.loginForm.get('password')!
  }

logIn(){
  
}

hide = true;
clickEvent(event: MouseEvent) {
  this.hide = !this.hide;
  event.stopPropagation();
}

}
