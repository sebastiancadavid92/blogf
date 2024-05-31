import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { MatDialog,MatDialogModule } from '@angular/material/dialog';
import{MatButtonModule} from '@angular/material/button'
import { SignupComponent } from '../../../pages/signup/signup.component';
import {MatdialogComponent} from '../matdialog/matdialog.component'
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet,MatDialogModule,MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {



  constructor(public dialog: MatDialog) {}

  renderDialog(obj:{login:boolean}){
    
    const dialogRef = this.dialog.open(MatdialogComponent,{data:obj});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });


  }

}



