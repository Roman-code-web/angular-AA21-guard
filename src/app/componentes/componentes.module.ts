import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormloginComponent } from './formlogin/formlogin.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { FormRegistroUserComponent } from './form-registro-user/form-registro-user.component';
import { TablauserComponent } from './tablauser/tablauser.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    FormloginComponent,
    FormRegistroUserComponent,
    TablauserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ], 
  exports:[
    FormloginComponent,
    FormRegistroUserComponent,
    TablauserComponent
  ]
})
export class ComponentesModule { }
