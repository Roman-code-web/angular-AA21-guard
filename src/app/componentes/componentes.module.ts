import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormloginComponent } from './formlogin/formlogin.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormloginComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ], 
  exports:[
    FormloginComponent
  ]
})
export class ComponentesModule { }
