import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {

  }

}
