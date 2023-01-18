import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormloginComponent } from './formlogin/formlogin.component';
import {  ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormloginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ], 
  exports:[
    FormloginComponent
  ]
})
export class ComponentesModule { }
