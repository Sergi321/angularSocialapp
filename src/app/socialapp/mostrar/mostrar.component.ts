import { Component, OnInit, Input } from '@angular/core';
import { users } from '../register/clases/clases';
import { usuarios } from '../register/register.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

isShown: boolean = false ; // hidden by default


toggleShow() {

this.isShown = ! this.isShown;

}

  constructor() { }

  ngOnInit(): void {
  }

  @Input() item = usuarios


}
