import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from 'src/app/service/data.service';
import { Product } from '../Models/products';
import { Observable } from 'rxjs';
import { GridDataResult } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [DataService]
})
export class MainPageComponent implements OnInit {

  constructor(private http: Http, private dataService: DataService) { }

  public view: Observable<GridDataResult>;

  public appParameters: Product[];
  public editDataItem: Product;
  public isNew: boolean;
  public removedDataItem: Product;
  public openedDialog = false;

  ngOnInit() {
    this.getProduct();
  }

  products: Product[];


  getProduct() {
    this.dataService.getProduct().subscribe(response => {
      this.products = response
    })
  }
  public addAppParameter() {
    this.editDataItem = new Product();
    this.isNew = true;
  }

  public editAppParameter({ dataItem }) {
    this.editDataItem = dataItem;
    this.isNew = false;
  }

  public cancel() {
    this.editDataItem = undefined;
  }
  public dialogFn: Function;
  

  public saveAppParameter(data:any) {

  }

  public removeAppParameter(data:any) {

    
  }

  public openRemoveDialog({ dataItem }) {
    this.openedDialog = true;
    this.removedDataItem = dataItem;
    this.dialogFn = this.removeAppParameter;
  }

}



