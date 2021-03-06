import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';
import { User } from '../Models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup = new FormGroup({
    'username': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.required),
  });

  public isNew: boolean = false;

  get f() { return this.loginForm.controls; }

  constructor(private dataService: DataService) { }
  ngOnInit(): void {

  }

  public giris(e) {
    var user = new User();
    user.username = this.loginForm.value.username;
    user.password = this.loginForm.value.password;
    this.dataService.loginUser(user).subscribe(response => {
      if (response != null) {
        this.dataService.userControl = true;
        this.dataService.newUser = false;
        DataService.user = response
      }
    })
  }
  public newUser() {
    this.dataService.newUser = true
  }
}
