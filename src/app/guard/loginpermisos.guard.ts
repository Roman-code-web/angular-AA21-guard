import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../servicios/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginpermisosGuard implements CanActivate {
 
  constructor(private router:Router, private loginservice:LoginService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const islogin=this.loginservice.islogin();
      if(islogin){
        this.router.navigate(['/home']);
        return false;
      } else{
        return true;
      }
  }
  
}
