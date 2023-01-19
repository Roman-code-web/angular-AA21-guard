import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../servicios/login.service';

@Injectable({
  providedIn: 'root'
})
export class RegistropermisoGuard implements CanActivate {

  constructor(private loginservice:LoginService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const islogin=this.loginservice.islogin();
    
    //si esta logeado que muestre la pagina registro
    if(islogin){
      return true;
    }else{
    //que me envie al login  
      this.router.navigate(['/'])
      return false
    }
    
  }
  
}
