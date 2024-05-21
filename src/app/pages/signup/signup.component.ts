import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators,FormControl } from '@angular/forms';
import{RegisterValidators} from '../../shared/validators/namevalidator'

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  registerform: FormGroup;

  constructor(){

    this.registerform=new FormGroup(
      {
        username: new FormControl('', [Validators.required, Validators.maxLength(50)]),
        email: new FormControl('',[Validators.required,Validators.email]),
        team:new FormControl('',Validators.maxLength(50)),
        first_name: new FormControl('',[RegisterValidators.isNameValid]),
        last_name: new FormControl('',RegisterValidators.isNameValid),
        birthdate: new FormControl(new Date()),
        is_admin:new FormControl(false),
        password: new FormControl('',[Validators.required]),
        confirmPassword: new FormControl('',[Validators.required]),
      },{
        validators:RegisterValidators.matchPasswords
      }
    )
  }
  save(event: Event) {
    console.log(event)
  }
}
