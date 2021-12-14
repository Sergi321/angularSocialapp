import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from
'@angular/forms';
import { users } from './clases/clases';


export let usuarios: users[] = [




];

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})



export class RegisterComponent implements OnInit {





  datos = new users();




  add(){
    usuarios.push({user:this.datos.user,apellidos:this.datos.apellidos,edad:this.datos.edad,nombre:this.datos.nombre,foto:this.datos.foto,descrip:this.datos.descrip,
    correo:this.datos.correo,passwd:this.datos.passwd });
    }


  constructor() { }

  ngOnInit(): void {
  }


}
