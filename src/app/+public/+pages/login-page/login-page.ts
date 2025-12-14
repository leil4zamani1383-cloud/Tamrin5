import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
 router=inject(Router);
 loginForm:loginForm={
  username:'',
  password:'',
  keepMe:false
 };
 chrck(){
  
 }
}

interface loginForm {
  username: string;
  password: string;
  keepMe: boolean;
}
