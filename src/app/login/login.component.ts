import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  hide:boolean;
  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
    ]),
  });

  constructor() {
    this.hide = true;
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.loginForm.value);
    console.log("Submitted");    
  }
}
