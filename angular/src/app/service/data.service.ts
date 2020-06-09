import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError, tap } from "rxjs/operators";
import { Http, Response } from '@angular/http';
import { Product } from '../pages/Models/products';
import { User } from '../pages/Models/login';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  public userControl:boolean = false;
  public newUser: boolean =false;
  constructor(private http: Http) { }
  
  getProduct(): Observable<Product[]> {  
    return this.http.get("api/getProducts")
      .pipe(map(Response => Response.json()))
  }


  public addProduct(product: Product) {
    return this.http.post( "api/addProduct", product);
  }

  public deleteProduct(product: Product) {
    return this.http.post( "api/deleteProduct", product);
  }
  
  public loginUser(user: User) {
    return this.http.post("api/loginUser", user);
  }

  public saveUser(user: User) {
    return this.http.post("api/saveUser", user);
  }


}


