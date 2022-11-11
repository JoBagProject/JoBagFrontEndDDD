import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobInformationComponent } from './Enterprise/job-information/job-information.component';
import { PostulationsComponent } from './Result/postulations/postulations.component';
import {SearchJobsComponent} from "./Apply/search-jobs/search-jobs.component";
import {ContratComponent} from "./Ability/contrat/contrat.component";
import {InterviewsComponent} from "./Ability/interviews/interviews.component";
import {ApprovedPostulantComponent} from "./Result/approved-postulant/approved-postulant.component";
import {MyAccountPostulantComponent} from "./Apply/my-account-postulant/my-account-postulant.component";
import {ModifyPersonalInformationPostulantComponent} from "./Apply/modify-personal-information-postulant/modify-personal-information-postulant.component";
import {LoginRegisterComponent} from "./Security/login-register/login-register.component";
import {ChoosePostulantOrEmployerComponent} from "./Public/choose-postulant-or-employer/choose-postulant-or-employer.component";
import {EmployeerNewComponent} from "./Enterprise/employeer-new/employeer-new.component";
import {PostulantNewComponent} from "./Apply/postulant-new/postulant-new.component";
import {ChangepasswordComponent} from "./Security/changepassword/changepassword.component";
import {JobOfferNewComponentComponent} from "./Enterprise/job-offer-new-component/job-offer-new-component.component";
import {InterviewPostulantAllComponent} from "./Ability/interview-postulant-all/interview-postulant-all.component";
import {MyadsComponent} from "./Public/myads/myads.component";
import {MypostulationsComponent} from "./Result/mypostulations/mypostulations.component";
import {ModifyPersonalInformationEmployeerComponent} from "./Enterprise/modify-personal-information-employeer/modify-personal-information-employeer.component";
import {MyAccountEmployeerComponent} from "./Enterprise/my-account-employeer/my-account-employeer.component";
import { SelectpostulantsComponent } from './Result/selectpostulants/selectpostulants.component';
import { MyadInformationComponent } from './Public/myad-information/myad-information.component';
import {SelectpostulantsMoreinfoComponent} from "./Result/selectpostulants-moreinfo/selectpostulants-moreinfo.component";
import {NewInterviewComponent} from "./Ability/new-interview/new-interview.component";
import {ModifyProfessionalProfileComponent} from "./Enterprise/modify-professional-profile/modify-professional-profile.component";
import {ModifyCompanyProfileComponent} from "./Enterprise/modify-company-profile/modify-company-profile.component";
import {TermsAndConditionsComponent} from "./Public/terms-and-conditions/terms-and-conditions.component";
import { MypostulantionInformationComponent } from './Result/mypostulantion-information/mypostulantion-information.component';
import {DialogJobNewComponent} from "./Public/dialog-job-new/dialog-job-new.component";

const routes: Routes = [

  {path:'', pathMatch: 'full', redirectTo: 'login'},
  {path:'login', component: LoginRegisterComponent, pathMatch: 'full'},
  {path:'employeer/new', component: EmployeerNewComponent},
  {path:'postulant/new', component: PostulantNewComponent},
  {path:'changepassword', component: ChangepasswordComponent},
  {path:'choosePostulantOrEmployeer', component: ChoosePostulantOrEmployerComponent},

  {path:'postulant/:postulantId', component:SearchJobsComponent }, //HOME POSTULANTE
  {path:'postulant/:postulantId/joboffer/:jobofferId', component: JobInformationComponent},
  {path:'postulant/:postulantId/joboffer/:jobofferId/newpostulation', component: PostulationsComponent},
  {path:'postulant/:postulantId/interview', component: InterviewPostulantAllComponent},
  {path:'postulant/:postulantId/postulations', component: MypostulationsComponent},
  {path:'postulant/:postulantId/postulations/:jobId',component: MypostulantionInformationComponent},
  {path:'postulant/:postulantId/myaccount', component : MyAccountPostulantComponent},
  {path:'postulant/:postulantId/modify-personal-information-postulant', component : ModifyPersonalInformationPostulantComponent},
  {path:'joboffer/:jobofferId/employeers/:employeerId', component: MyadInformationComponent},
//////////////////////////////////////////////////////////////////////////////////////////////////rutas de toolbarpostulante
  {path:'employeer/:employeerId', component: MyadsComponent},   //HOME EMPLEADOR

  {path:'employeer/:employeerId/myaccount', component : MyAccountEmployeerComponent},
  {path: 'employeer/:employeerId/joboffer/:jobofferId/postulantjobs', component: SelectpostulantsComponent},
  {path: 'employeer/:employeerId/joboffer/:jobofferId/postulantjobs/:postulantjobsId', component: SelectpostulantsMoreinfoComponent},
  {path: 'employeer/:employeerId/joboffer/:jobofferId/postulantjob/new-interview', component : NewInterviewComponent},
//////////////////////////////////////////////////////////////////////////////////////////////////rutas de toolbarpostulante

///testeo//

  {path:'postulant/:postulantId/modify-professional-profile', component : ModifyProfessionalProfileComponent},
  {path:'employeer/:employeerId/joboffernew', component: JobOfferNewComponentComponent},
  {path:'employeer/:employeerId/postulant/:postulantId/joboffer/:jobOfferId/approved-postulant/contrat', component: ContratComponent},
  {path:'postulants/:postulantId/joboffer/:jobOfferId/interview', component: InterviewsComponent},
  {path:'employeer/:employeerId/postulant/:postulantId/joboffer/:jobOfferId/approved-postulant', component: ApprovedPostulantComponent},
  {path:'employeer/:employeerId/modify-personal-information-employeer', component : ModifyPersonalInformationEmployeerComponent},
  {path:'employeer/:employeerId/modify-company-profile', component : ModifyCompanyProfileComponent},
  {path:'terms-and-conditions', component : TermsAndConditionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
