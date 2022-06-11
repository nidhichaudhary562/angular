import { Component, OnInit } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {FormGroup, FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userdata:any={};
  constructor() { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
      username:new FormControl('',[Validators.required]),
      email:new FormControl(''),
      password:new FormControl('')
  });
  getvalue(){
    console.warn(this.loginForm.value);

  }

  get username(){
    return this.loginForm.get('username');
  }

}
