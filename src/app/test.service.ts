import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private _HttpClient:HttpClient) 
  { 

  }

  getData():Observable<any>
  {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }

}
