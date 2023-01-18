import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepermisosGuard } from './guard/homepermisos.guard';
import { LoginpermisosGuard } from './guard/loginpermisos.guard';
import { RegistropermisoGuard } from './guard/registropermiso.guard';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {path:"", component:LoginComponent, canActivate:[LoginpermisosGuard]},
  {path:"home", component:HomeComponent, canActivate:[HomepermisosGuard]},
  {path:"registroUser", component:RegistroComponent, canActivate:[RegistropermisoGuard]},
  {path: '**', pathMatch: 'full', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
