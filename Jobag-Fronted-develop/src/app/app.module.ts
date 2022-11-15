import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from "@angular/common/http";
import {PostulantsApiService} from "./shared/Service/postulants-api.service";
import { PostulantsComponent } from './apply/component/postulants/postulants.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatPaginatorModule} from "@angular/material/paginator";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { PostulationsComponent } from './result/component/postulations/postulations.component';
import {MatStepperModule} from "@angular/material/stepper";
import { PostulationStepOneComponent } from './result/view/postulation-step-one/postulation-step-one.component';
import { PostulationStepTwoComponent } from './result/view/postulation-step-two/postulation-step-two.component';
import { PostulationStepTreeComponent } from './result/view/postulation-step-tree/postulation-step-tree.component';
import { MainNavPostulantComponent } from './public/component/main-nav-postulant/main-nav-postulant.component';
import { FilestackModule } from '@filestack/angular';
import { UploudfilesComponent } from './public/view/uploudfiles/uploudfiles.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import { FiltroPostulanteComponent } from './result/component/filtro-postulante/filtro-postulante.component';
import { SearchJobsComponent } from './apply/view/search-jobs/search-jobs.component';
import { SideMenuComponent } from './public/view/side-menu-postulant/side-menu.component';
import { JobsListComponent } from './enterprise/view/jobs-list/jobs-list.component';
import { JobsApiService } from './shared/Service/jobs-api.service';
import { JobInformationComponent } from './enterprise/component/job-information/job-information.component';
import { AccountsettingsComponent } from './public/component/accountsettings/accountsettings.component';
import { ProfileStudentComponent } from './apply/view/profile-student/profile-student.component';
import {MatChipsModule} from "@angular/material/chips";
import {MatExpansionModule} from '@angular/material/expansion';
import { ContratComponent } from './ability/view/contrat/contrat.component';
import { InterviewsComponent } from './ability/component/interviews/interviews.component';
import { ApprovedPostulantComponent } from './result/component/approved-postulant/approved-postulant.component';
import {MyAccountPostulantComponent} from "./apply/view/my-account-postulant/my-account-postulant.component";
import { EmployeerpruebaComponent } from './enterprise/view/employeerprueba/employeerprueba.component';
import { LoginRegisterComponent } from './security/component/login-register/login-register.component';
import { ChoosePostulantOrEmployerComponent } from './public/view/choose-postulant-or-employer/choose-postulant-or-employer.component';
import { EmployeerNewComponent } from './enterprise/component/employeer-new/employeer-new.component';
import { PostulantNewComponent } from './apply/component/postulant-new/postulant-new.component';
import { MainNavEmployeerComponent } from './public/component/main-nav-employeer/main-nav-employeer.component';
import {EmployeerService} from "./shared/Service/employeer.service";
import {PostulantService} from "./shared/Service/postulant.service";
import {MatTabsModule} from "@angular/material/tabs";
import { ChangepasswordComponent } from './security/component/changepassword/changepassword.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import { InterviewsPostulantApiComponent } from './ability/view/interviews-postulant-api/interviews-postulant-api.component';
import { InterviewPostulantAllComponent } from './ability/component/interview-postulant-all/interview-postulant-all.component';
import { DialogContratComponent } from './public/component/dialog-changes-saved-successfully/dialog-contrat.component';
import {MatDialogModule} from "@angular/material/dialog";
import { DialogJobNewComponent } from './public/component/dialog-job-new/dialog-job-new.component';
import { MyadsComponent } from './public/view/myads/myads.component';
import { MypostulationsComponent } from './result/component/mypostulations/mypostulations.component';
import { ModifyPersonalInformationPostulantComponent} from "./apply/component/modify-personal-information-postulant/modify-personal-information-postulant.component";
import { ModifyPersonalInformationEmployeerComponent } from './enterprise/component/modify-personal-information-employeer/modify-personal-information-employeer.component';
import {MyAccountEmployeerComponent} from "./enterprise/view/my-account-employeer/my-account-employeer.component";
import { SelectpostulantsComponent } from './result/view/selectpostulants/selectpostulants.component';
import { NewInterviewComponent } from './ability/component/new-interview/new-interview.component';
import { MyadInformationComponent } from './public/component/myad-information/myad-information.component';
import {MatMenuModule} from '@angular/material/menu';
import { SelectpostulantsMoreinfoComponent } from './result/view/selectpostulants-moreinfo/selectpostulants-moreinfo.component';
import { ModifyProfessionalProfileComponent } from './enterprise/component/modify-professional-profile/modify-professional-profile.component';
import { ModifyCompanyProfileComponent } from './enterprise/component/modify-company-profile/modify-company-profile.component';
import { TermsAndConditionsComponent } from './public/view/terms-and-conditions/terms-and-conditions.component';
import { MypostulantionInformationComponent } from './result/component/mypostulantion-information/mypostulantion-information.component';
import {JobOfferNewComponentComponent} from "./enterprise/component/job-offer-new-component/job-offer-new-component.component";

@NgModule({
  declarations: [
    AppComponent,
    SearchJobsComponent,
    SideMenuComponent,
    FiltroPostulanteComponent,
    JobsListComponent,
    PostulationsComponent,
    PostulationStepOneComponent,
    PostulationStepTwoComponent,
    PostulationStepTreeComponent,
    MainNavPostulantComponent,
    UploudfilesComponent,
    PostulantsComponent,
    JobInformationComponent,
    AccountsettingsComponent,
    ProfileStudentComponent,
    ContratComponent,
    InterviewsComponent,
    ApprovedPostulantComponent,
    MyAccountPostulantComponent,
    EmployeerpruebaComponent,
   LoginRegisterComponent,
    ChoosePostulantOrEmployerComponent,
    EmployeerNewComponent,
    PostulantNewComponent,
    MainNavEmployeerComponent,
    ChangepasswordComponent,
    InterviewsPostulantApiComponent,
    InterviewPostulantAllComponent,
    DialogContratComponent,
    DialogJobNewComponent,
    JobOfferNewComponentComponent,
    MyadsComponent,
    MypostulationsComponent,
    MyAccountEmployeerComponent,
    ModifyPersonalInformationPostulantComponent,
    ModifyPersonalInformationEmployeerComponent,
    SelectpostulantsComponent,
    NewInterviewComponent,
    MyadInformationComponent,
    SelectpostulantsMoreinfoComponent,
    MyAccountEmployeerComponent,
    ModifyProfessionalProfileComponent,
    ModifyCompanyProfileComponent,
    TermsAndConditionsComponent,
    MypostulantionInformationComponent,


  ],

  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSortModule,
    MatTableModule,
    MatSidenavModule,
    FilestackModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatListModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatChipsModule,
    MatTabsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatMenuModule,
  ],


  providers: [PostulantsApiService,JobsApiService,EmployeerService,PostulantService],

  bootstrap: [AppComponent]
})
export class AppModule { }
