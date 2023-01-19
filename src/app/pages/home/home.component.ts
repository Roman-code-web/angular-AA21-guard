import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //variable
  usuario!:string;
  constructor(private loginservice:LoginService){}

  ngOnInit(): void {
    this.usuario=this.loginservice.usuario;
  }

}
