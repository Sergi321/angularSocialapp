import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SocialappModule } from './socialapp/socialapp.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './socialapp/admin/admin.component';
import { RegisterComponent } from './socialapp/register/register.component';
import { MostrarComponent } from './socialapp/mostrar/mostrar.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'mostrar', component: MostrarComponent }

];
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,

  ],
  imports: [
    BrowserModule,
    SocialappModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
