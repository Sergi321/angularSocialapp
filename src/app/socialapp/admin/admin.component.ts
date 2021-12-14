import { Component, OnInit, Input } from '@angular/core';
import { users } from '../register/clases/clases';
import { usuarios } from '../register/register.component';
import { RegisterComponent } from '../register/register.component';
// import Swal from 'sweetalert2/dist/sweetalert2.js';

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
  usuarios.splice(array,1)
  }
}
