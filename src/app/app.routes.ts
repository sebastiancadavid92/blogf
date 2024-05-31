import { Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login.component'
import {SignupComponent}from './pages/signup/signup.component'
import {NavbarComponent}from './shared/Component/navbar/navbar.component'
import{HomeComponent} from './pages/home/home.component'


export const routes: Routes = [

    { 
        path:'',
        component:NavbarComponent,
        children:[
            {
                path:'',
                component:HomeComponent
            }
            ,
            {
                path:'signup',
                component:SignupComponent

            },

            {
                path:'login',
                component:LoginComponent

            }


        ]
        


    },

    {
        path:'login',
        component: LoginComponent
    }


];
