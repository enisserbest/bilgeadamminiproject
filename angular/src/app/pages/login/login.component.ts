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

  public isNew:boolean = false;

  constructor(private dataService:DataService) { }
  //public user: User = new User();
  ngOnInit(): void {

  }

  public giris(){
    var user= new User();
    user.username = this.loginForm.value.username;
    user.password = this.loginForm.value.password;
    this.dataService.loginUser(user).subscribe(response => {     
      if(response.json()!=null){
        this.dataService.userControl=true;
        this.dataService.newUser=false;
        this.dataService.user = response.json();
        console.log(this.dataService.user);
        
      }
      
    })
  }
  public newUser(){
    this.dataService.newUser =true
  }
}
