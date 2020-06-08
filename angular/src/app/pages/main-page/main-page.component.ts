import { Component, OnInit } from '@angular/core';

import { Http, Response } from '@angular/http'; //Adım 2
import { Product } from './products';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private http:Http) { }

  ngOnInit(): void {
    this.getAllData();
  }
  products: Product[];
  public getAllData() {
    this.http.get("api/getProducts", {
    }).subscribe((data: any) => {
        this.products =JSON.parse(data._body)
        console.log(this.products);
        
       
        
        
        

    }, error => {
    });
}


}
