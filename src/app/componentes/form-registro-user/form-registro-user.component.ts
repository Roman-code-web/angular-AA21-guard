import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidExit } from 'src/app/guard/InterfazExit.component';
import { DatauserService } from 'src/app/servicios/datauser.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-form-registro-user',
  templateUrl: './form-registro-user.component.html',
  styleUrls: ['./form-registro-user.component.css']
})
export class FormRegistroUserComponent implements OnInit, ValidExit {
  //1.declaro variable.
  formRegistroUser!:FormGroup;
  guardado=false;
  //2.constructor
  constructor(private formRegistrobuilder:FormBuilder, private datauser:DatauserService ){
  }

  ngOnInit(): void {
    this.formRegistroUser=this.formRegistrobuilder.group({
      nombre:['',
      Validators.required
      ],
      apellido:['',
        Validators.required
      ],
      telefono:['',
        Validators.required
      ],
      direccion:['',
        Validators.required
      ],
      usuario:['',
        Validators.required
      ],
      password:['',
        Validators.required
      ],
    })
   
  }
  //si el usuario a escrito devuelve false
  onValidExit():boolean{
    return !this.formRegistroUser?.dirty;
  }  

 
  guardarUsuario(){
    if(this.formRegistroUser.valid){
      Swal.fire({
        icon: 'success',
        title: 'Usuario Registrado',  
      })
      this.datauser.listaUser.push(this.formRegistroUser.value) ;
      
      this.formRegistroUser.reset();
      
    }
  }
 
}
