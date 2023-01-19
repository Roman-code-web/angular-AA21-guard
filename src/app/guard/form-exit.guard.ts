import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, retry } from 'rxjs';
import Swal from 'sweetalert2';

import { ValidExit } from './InterfazExit.component';

@Injectable({
  providedIn: 'root'
})
export class FormExitGuard implements CanDeactivate<ValidExit> {
  canDeactivate(
    component: any,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      //console.log(component.formRegistroUserComponent.onValidExit())
      let res=false;
      if(!component.formRegistroUserComponent.onValidExit()){
         
       return Swal.fire({
        title: 'Estas seguro de salir?',
        text: "no terminaste de rellenar el formulario se perderan los datos",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Porfavor!'
      }).then((result) => {
        if (result.isConfirmed) {
          return true
        }else{
          return false
        }
      })  
      }
      
      
      return true
     // return component.formRegistroUserComponent.onValidExit()? true : confirm('estasseguro');
  }
  
}
