import { Component,  } from '@angular/core';
import { DatauserService } from 'src/app/servicios/datauser.service';

@Component({
  selector: 'app-tablauser',
  templateUrl: './tablauser.component.html',
  styleUrls: ['./tablauser.component.css']
})
export class TablauserComponent  {
  listaUsuario:any=[];
  constructor( public datauser:DatauserService ){
  }


}
