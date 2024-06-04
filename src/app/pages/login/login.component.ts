
import { Component, inject, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators,FormControl } from '@angular/forms';
import{RegisterValidators} from '../../shared/validators/namevalidator'
import {SingupService}from '../../services/singup/singup.service'
import { Subscription } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import swal from 'sweetalert2';
import{Inject} from'@angular/core'
import {MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {LoginService} from '../../services/login/login.service'


import {MatIconModule} from '@angular/material/icon';

import {MatInputModule} from '@angular/material/input';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';
import { MatdialogComponent } from '../../shared/Component/matdialog/matdialog.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,MatFormField,MatIconModule,MatInputModule,MatFormFieldModule,MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm:FormGroup;
  hide = true;
  invalidForm=true;
  messangeError='';
  @Input({required:true}) RefMatDialog?:MatDialogRef<MatdialogComponent>;
  
  constructor(private logiServ:LoginService, private ruter:Router)
    {

    this.loginForm=new FormGroup(
      {
        email: new FormControl('',[Validators.required,Validators.pattern(/^[a-z_0-9-.]+@[a-z]+.com$/)]),
        password: new FormControl('',Validators.required),

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
  
  if (this.loginForm.valid)
  {


    this.logiServ.login({username:this.email.value, password:this.password.value}).subscribe({
      next:(result)=>{
        swal.fire({
          icon: "success",
          title: "New user registered successfully",
          showConfirmButton: false,
          timer: 1000
        });
        this.RefMatDialog?.close()
        this.ruter.navigate([''])
        
        
      },
      error:(err)=>{
 
        if(err.error.error==='invalid credentials'){

         this.messangeError='Invalid credentials, please check your eamil and passowrd and try again'
        
        }
        else if (err.status == 403){
          this.messangeError='Logged in users, are not allow to use this action'
        }
        else{
          this.messangeError='Unspected error. contact to client service'

        }

        swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });


      }
    })

  }

  else{
    this.invalidForm=false;
    this.loginForm.markAllAsTouched()

  }

  
  
}


clickEvent(event: MouseEvent) {
  this.hide = !this.hide;
  event.stopPropagation();
}

}
