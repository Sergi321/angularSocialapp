import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { users } from './clases/clases';
import Swal from 'sweetalert2';

export let usuarios: users[] = [




];

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})



export class RegisterComponent implements OnInit {

  resultado!: string;

  formularioContacto = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required, Validators.email]),
    apellido: new FormControl('', [Validators.required]),
    edat: new FormControl('', [Validators.required]),
    mensaje: new FormControl('', [Validators.required, Validators.minLength(4)]),
    contra: new FormControl('', [Validators.required]),
    confirmar: new FormControl('', [Validators.required]),


  
  });




  datos = new users();


  


  add(){

    let pass1 = this.formularioContacto.controls['contra'].value;
    let pass2 = this.formularioContacto.controls['confirmar'].value;
   

    if (this.formularioContacto.valid && pass1 == pass2){
    usuarios.push({user:this.datos.user,apellidos:this.datos.apellidos,edad:this.datos.edad,nombre:this.datos.nombre,foto:this.datos.foto,descrip:this.datos.descrip,
      correo:this.datos.correo,passwd:this.datos.passwd });
      Swal.fire('Gracias!', 'Has completado el registro correctamente!', 'success');
  }else{
  
    this.resultado="asegurate de no dejar campos vacíos y que las contraseñas coincidan";
  }
    }





  constructor() { }

  ngOnInit(): void {
    
  }


}
