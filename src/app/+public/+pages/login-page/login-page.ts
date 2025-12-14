import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
 router=inject(Router);
 message:string='';
 loginForm:loginForm={
  username:'',
  password:'',
  keepMe:false
 };
 check(){
 if(this.loginForm.username=='admin' && this.loginForm.password=='admin'){
  this.router.navigateByUrl('private');
 }
else{
  this.message='نام کاربری صحیح نیست';
}
 }
}

interface loginForm {
  username: string;
  password: string;
  keepMe: boolean;
}
