import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})

export class authGuard implements CanActivate {
  constructor(private login : LoginService, private router : Router){

  }

  canActivate(route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): boolean{
      if(this.login.isLoginUser()){
        return true;
      }else{
        alert("Please register first");
        this.router.navigate(['/login']);
        return false;
      }
  }

}
