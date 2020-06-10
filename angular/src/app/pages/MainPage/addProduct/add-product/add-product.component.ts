import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/pages/Models/products';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  public active = false;
  public editForm: FormGroup = new FormGroup({
    'id': new FormControl(''),
    'name': new FormControl('', Validators.required),
    'category': new FormControl('', Validators.required),
  });

  public categoryList: Array<string> = ["Teknoloji", "Bilim", "Tarih", "Sanat", "Felsefe"];

  get f() { return this.editForm.controls; }

  @Input() public isNew = false;

  @Input() public set model(parameter: Product) {
    this.editForm.reset(parameter);
    this.active = parameter !== undefined;
  }

  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Output() save: EventEmitter<Product> = new EventEmitter();

  public onSave(e): void {
    this.save.emit(this.editForm.value);
    this.active = false;
  }

  public onCancel(e): void {
    this.closeForm();
  }

  public closeForm(): void {
    this.active = false;
    this.cancel.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}

