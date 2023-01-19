import { Component, ViewChild } from '@angular/core';
import { FormRegistroUserComponent } from 'src/app/componentes/form-registro-user/form-registro-user.component';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent  {
  @ViewChild('formregistrouser') formRegistroUserComponent! : FormRegistroUserComponent
}
