import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{


  constructor(public loginservice:LoginService){}

  ngOnInit():void{
   this.loginservice.islogin();
  }
  
}
