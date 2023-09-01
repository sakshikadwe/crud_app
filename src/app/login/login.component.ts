
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from '../service/http.service';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 loginForm!:FormGroup;
 isNewUser:boolean =false;
  
 constructor(private fb:FormBuilder, private http:HttpService, private router: Router, private loginsvc:LoginService){}

 ngOnInit(){
  this.createForm();
 }

 createForm(){
  this.loginForm=this.fb.group({
    'email':[''],
    'password':['']
  })
    
  }
  login(){
    const endPoint = "users?email=" + this.loginForm.value.email + "&&password=" + this.loginForm.value.password;
    this.http.getData(endPoint).subscribe((el: any) => {
      this.loginsvc.setLogin(true);
      if (el && el.length > 0) {
        this.isNewUser = false;
        this.router.navigate(['/home']);
      } else {
        this.isNewUser = true;
      }
    })
  }
  
 }



