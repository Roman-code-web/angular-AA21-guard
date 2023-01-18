import { Component } from '@angular/core';

@Component({
  selector: 'app-formlogin',
  templateUrl: './formlogin.component.html',
  styleUrls: ['./formlogin.component.css']
})
export class FormloginComponent {

  usu="alondra";
  password="123";
  incorrecto=false;

  Login(usuario:string, pass:string){
    if(usuario==this.usu && pass==this.password){
      localStorage.setItem('login',JSON.stringify({'usuario':usuario,'password':pass,'autentificacion':true}));
    }else{
      this.incorrecto=true
    }
  }
}
