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
        title: '¿Lo vas a borrar ? :(',
        text: 'El usuario se va a perder por el espacio...',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Quemarlo!',
        cancelButtonText: 'Salvarlo'
      }).then((result) => {

        if (result.value) {
          usuarios.splice(array,1)
          Swal.fire(
            'Eliminado...',
            'El usuario ha desaparecido!',
            'success'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Salvado!',
            'El usuario fue rescatado...',
            'error'
          )
        }
      })
    }
  }

