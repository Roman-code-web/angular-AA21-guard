import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { RegistroComponent } from './registro/registro.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    HomeComponent,
    PostComponent,
    RegistroComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule
  ],
  exports:[
    HomeComponent,
    PostComponent,
    RegistroComponent
  ]
})
export class PagesModule { }
