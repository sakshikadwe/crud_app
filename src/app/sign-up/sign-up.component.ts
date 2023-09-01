import { Component } from '@angular/core';
import { FormBuilder ,FormGroup} from '@angular/forms';
import { HttpService } from '../service/http.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm!:FormGroup;

 constructor(private fb:FormBuilder, private http:HttpService){

 }

 ngOnInit(){
  this.createForm();
 }
  createForm(){
    this.signUpForm = this.fb.group({
      'name':[''],
      'mobileNo':[''],
      'email':[''],
      'password':['']
    })
  }

  signUp(){
    //  console.log(this.signUpForm.value);
    this.http.postData('users', this.signUpForm.value).subscribe(
      (response:any) => {
        console.log(response);
      },
      (error:any) => {

      }
    )

    this.http.getData('users').subscribe(
      (response:any) => {
        console.log(response);
      },
      (error:any) => {

      }
    )
    }
 }
  
