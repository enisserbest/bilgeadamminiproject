import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'; //Adım 2
import { DataService } from 'src/app/service/data.service';
import { Product } from '../Models/products';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [DataService]
})
export class MainPageComponent implements OnInit {

  constructor(private http: Http, private dataService: DataService) { }

  ngOnInit() {
    this.getProduct();
  }

  products: Product[];


  getProduct() {
    this.dataService.getProduct().subscribe(response => {
      this.products = response
    })
  }
}



