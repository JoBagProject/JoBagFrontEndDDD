import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./Security/login/login.component";
import {
  ChoosePostulantOrEmployerComponent
} from "./Public/choose-postulant-or-employer/choose-postulant-or-employer.component";

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path:'choosePostulantOrEmployeer', component: ChoosePostulantOrEmployerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
