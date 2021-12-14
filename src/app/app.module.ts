import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SocialappModule } from './socialapp/socialapp.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './socialapp/admin/admin.component';
import { RegisterComponent } from './socialapp/register/register.component';
import { MostrarComponent } from './socialapp/mostrar/mostrar.component';

const routes: Routes = [
  { path: 'inicio', component: AppComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'mostrar', component: MostrarComponent }

];
@NgModule({
  declarations: [
    AppComponent,

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
