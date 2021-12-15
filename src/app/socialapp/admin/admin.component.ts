import { Component, OnInit, Input } from '@angular/core';
import { users } from '../register/clases/clases';
import { usuarios } from '../register/register.component';
import { RegisterComponent } from '../register/register.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  item = usuarios



 


  borrar(array: any){
   
      Swal.fire({
        title: 'Are you sure want to remove?',
        text: 'You will not be able to recover this file!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
       
        if (result.value) {
          usuarios.splice(array,1)
          Swal.fire(
            'Eliminado!',
            'El usuario se fue con Maradona y Kobe.',
            'success'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelado',
            'El usuario no se ha borrado',
            'error'
          )
        }
      })
    }
  }

