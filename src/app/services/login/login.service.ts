import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment.development'
import{HttpClient} from '@angular/common/http'
import {loginData} from '../../shared/models/user'
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private logInUrl=`${environment.URLAPI}user/login/`;

  constructor(private http:HttpClient) { }

  login(data:loginData){
   return this.http.post(this.logInUrl,data)
  }




}
