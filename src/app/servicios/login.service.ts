import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  usuario="alondra";
  password="123";
  logeado=false;
  constructor() { }

  login(user:string, pass:string){
    if(user===this.usuario && pass===this.password){
      localStorage.setItem('login',JSON.stringify({'usuario':user,'password':pass}));
      this.islogin();
      return true;
    }else{
      this.islogin();
      return false;
    }  
  }
  
  logout(){
    localStorage.removeItem('login');
    this.logeado=false;
  }

  islogin(){
    if(localStorage.getItem('login')){
      this.logeado=true;
      return true;
    }else{
      this.logeado=false;
      return false;
    }
  }
}
