import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(){

  }
  
  private loginUser : boolean = false;

  isLoginUser() {
    return this.loginUser;
  }

  setLogin(flag:boolean){
    this.loginUser = flag;
  }
}
