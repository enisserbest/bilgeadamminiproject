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

  constructor(private dataService:DataService) { }
  public user: User = null;
  ngOnInit(): void {

  }

  public giris(){
    this.user.username = this.loginForm.value.username;
    this.user.password = this.loginForm.value.password;
    this.dataService.loginUser(this.user).subscribe(response => {
      if(response){
        this.dataService.userControl=true;
      }
    })


  }
}
