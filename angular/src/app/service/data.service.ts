import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError, tap } from "rxjs/operators";
import { Http, Response } from '@angular/http';
import { Product } from '../pages/Models/products';
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


