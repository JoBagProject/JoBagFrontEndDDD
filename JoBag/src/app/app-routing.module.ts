import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./Security/login/login.component";
import {
  ChoosePostulantOrEmployerComponent
} from "./Public/choose-postulant-or-employer/choose-postulant-or-employer.component";
import {PostulantNewComponent} from "./Apply/postulant-new/postulant-new.component";
import {EmployeerNewComponent} from "./Enterprise/employeer-new/employeer-new.component";
import {ChangepasswordComponent} from "./Security/changepassword/changepassword.component";

const routes: Routes = [
  //                  LOGIN                                                         //
  {path:'', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path:'choosePostulantOrEmployeer', component: ChoosePostulantOrEmployerComponent},
  {path:'postulant/new', component: PostulantNewComponent},
  {path:'employeer/new', component: EmployeerNewComponent},
  {path:'changepassword', component: ChangepasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
