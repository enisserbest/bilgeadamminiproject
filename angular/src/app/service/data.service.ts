import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../pages/main-page/products';
import { map, catchError, tap } from "rxjs/operators"; 
import { Http, Response } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: Http) { }



  getProduct(): Observable<Product[]> { //Adım 5 
    return this.http.get("api/getProducts")
      .pipe(map(Response => Response.json()))
  }
}


