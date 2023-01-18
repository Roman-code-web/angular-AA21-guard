import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-formlogin',
  templateUrl: './formlogin.component.html',
  styleUrls: ['./formlogin.component.css']
})
export class FormloginComponent implements OnInit {
  incorrecto=false;
  public formLogin!:FormGroup;

  constructor(private router:Router , private loginservice:LoginService , private formloginbuilder:FormBuilder){}

  ngOnInit(): void {
      this.formLogin=this.formloginbuilder.group({
        usuario:['',
        [
          Validators.required
        ]
        ],
        password:['',
        [
          Validators.required
        ]
        ]
      })
  }
  
  login(){
  const respuesta=this.loginservice.login(this.formLogin.get('usuario')?.value, this.formLogin.get('password')?.value);
    if(respuesta){
      this.router.navigate(['/home']);
    }else {
      console.log('usuario incorrecto');
    }
}
}