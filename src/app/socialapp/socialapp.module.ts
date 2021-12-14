import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { MostrarComponent } from './mostrar/mostrar.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [

    RegisterComponent,
    AdminComponent,
    MostrarComponent

  ], 
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[

    RegisterComponent,
    AdminComponent,
    MostrarComponent

  ]
})
export class SocialappModule { }
