import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../Models/login';
import { DataService } from 'src/app/service/data.service';
import { AlertService } from '../../alert/alert.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  options = { autoClose: true, keepAfterRouteChange: true };
  public newUserActive = false;
  public newUserForm: FormGroup = new FormGroup({
    'firstName': new FormControl('', Validators.required),
    'lastName': new FormControl('', Validators.required),
    'username': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.required),
    'category': new FormControl('', Validators.required),
  });
  public categoryList: Array<string> = ["Teknoloji", "Bilim", "Tarih", "Sanat", "Felsefe"];

  get f() { return this.newUserForm.controls; }

  constructor(private dataService: DataService, private alertService: AlertService) {
    setInterval(() => {
      this.newUserActive = this.dataService.newUser;
    }, 500);
  }

  ngOnInit(): void {
  }

  public onSave() {
    this.dataService.saveUser(this.newUserForm.value).subscribe(response => {
      this.alertService.success("Başarıyla Kaydedildi", this.options);
    })
    this.dataService.newUser = false
    this.newUserActive = false;
  }

  public onCancel() {
    this.dataService.newUser = false;
  }

  public closeForm() {
    this.dataService.newUser = false;

  }
}
