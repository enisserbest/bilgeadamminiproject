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

  public userControl: boolean;
  public newUser: boolean;
  public static user: User;

  constructor(private http: Http) {
    this.userControl = false;
    this.newUser = false;
    
  }

  public getProduct() {
      return this.http.post("api/getProducts", DataService.user).
      pipe(map(Response => Response.json()));
  }

  
  public getUser() {
    return this.http.post("api/getUser", DataService.user).
    pipe(map(Response => Response.json()));
}

  public addProduct(product: Product) {
    return this.http.post("api/addProduct", product);
  }

  public deleteProduct(product: Product) {
    return this.http.post("api/deleteProduct", product);
  }

  public loginUser(user: User) {
    return this.http.post("api/loginUser", user).
      pipe(map(Response => Response.json()));
  }

  public saveUser(user: User) {
    return this.http.post("api/saveUser", user);
  }
  public setUser(user: User) {
    DataService.user = user;
  }
}


