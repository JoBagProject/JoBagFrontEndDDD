import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobInformationComponent } from './enterprise/component/job-information/job-information.component';
import { PostulationsComponent } from './result/component/postulations/postulations.component';
import {SearchJobsComponent} from "./apply/view/search-jobs/search-jobs.component";
import {ContratComponent} from "./ability/view/contrat/contrat.component";
import {InterviewsComponent} from "./ability/component/interviews/interviews.component";
import {ApprovedPostulantComponent} from "./result/component/approved-postulant/approved-postulant.component";
import {MyAccountPostulantComponent} from "./apply/view/my-account-postulant/my-account-postulant.component";
import {ModifyPersonalInformationPostulantComponent} from "./apply/component/modify-personal-information-postulant/modify-personal-information-postulant.component";
import {LoginRegisterComponent} from "./security/component/login-register/login-register.component";
import {ChoosePostulantOrEmployerComponent} from "./public/view/choose-postulant-or-employer/choose-postulant-or-employer.component";
import {EmployeerNewComponent} from "./enterprise/component/employeer-new/employeer-new.component";
import {PostulantNewComponent} from "./apply/component/postulant-new/postulant-new.component";
import {ChangepasswordComponent} from "./security/component/changepassword/changepassword.component";
import {JobOfferNewComponentComponent} from "./enterprise/component/job-offer-new-component/job-offer-new-component.component";
import {InterviewPostulantAllComponent} from "./ability/component/interview-postulant-all/interview-postulant-all.component";
import {MyadsComponent} from "./public/view/myads/myads.component";
import {MypostulationsComponent} from "./result/component/mypostulations/mypostulations.component";
import {ModifyPersonalInformationEmployeerComponent} from "./enterprise/component/modify-personal-information-employeer/modify-personal-information-employeer.component";
import {MyAccountEmployeerComponent} from "./enterprise/view/my-account-employeer/my-account-employeer.component";
import { SelectpostulantsComponent } from './result/view/selectpostulants/selectpostulants.component';
import { MyadInformationComponent } from './public/component/myad-information/myad-information.component';
import {SelectpostulantsMoreinfoComponent} from "./result/view/selectpostulants-moreinfo/selectpostulants-moreinfo.component";
import {NewInterviewComponent} from "./ability/component/new-interview/new-interview.component";
import {ModifyProfessionalProfileComponent} from "./enterprise/component/modify-professional-profile/modify-professional-profile.component";
import {ModifyCompanyProfileComponent} from "./enterprise/component/modify-company-profile/modify-company-profile.component";
import {TermsAndConditionsComponent} from "./public/view/terms-and-conditions/terms-and-conditions.component";
import { MypostulantionInformationComponent } from './result/component/mypostulantion-information/mypostulantion-information.component';
import {DialogJobNewComponent} from "./public/component/dialog-job-new/dialog-job-new.component";

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
