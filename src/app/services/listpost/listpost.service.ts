import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import {environment} from '../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ListpostService {
  private listPostUrl=`${environment.URLAPI}post/`

  constructor(private http:HttpClient) { }

  listPost(){
    return this.http.get(this.listPostUrl)
  }


}
