import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from "@angular/common/http";
import {PostulantsApiService} from "./Shared/Service/postulants-api.service";
import { PostulantsComponent } from './Apply/postulants/postulants.component';
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
import { PostulationsComponent } from './Result/postulations/postulations.component';
import {MatStepperModule} from "@angular/material/stepper";
import { PostulationStepOneComponent } from './Result/postulation-step-one/postulation-step-one.component';
import { PostulationStepTwoComponent } from './Result/postulation-step-two/postulation-step-two.component';
import { PostulationStepTreeComponent } from './Result/postulation-step-tree/postulation-step-tree.component';
import { MainNavPostulantComponent } from './Public/main-nav-postulant/main-nav-postulant.component';
import { FilestackModule } from '@filestack/angular';
import { UploudfilesComponent } from './Public/uploudfiles/uploudfiles.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import { FiltroPostulanteComponent } from './Result/filtro-postulante/filtro-postulante.component';
import { SearchJobsComponent } from './Apply/search-jobs/search-jobs.component';
import { SideMenuComponent } from './Public/side-menu-postulant/side-menu.component';
import { JobsListComponent } from './Enterprise/jobs-list/jobs-list.component';
import { JobsApiService } from './Shared/Service/jobs-api.service';
import { JobInformationComponent } from './Enterprise/job-information/job-information.component';
import { AccountsettingsComponent } from './Public/accountsettings/accountsettings.component';
import { ProfileStudentComponent } from './Apply/profile-student/profile-student.component';
import {MatChipsModule} from "@angular/material/chips";
import {MatExpansionModule} from '@angular/material/expansion';
import { ContratComponent } from './Ability/contrat/contrat.component';
import { InterviewsComponent } from './Ability/interviews/interviews.component';
import { ApprovedPostulantComponent } from './Result/approved-postulant/approved-postulant.component';
import {MyAccountPostulantComponent} from "./Apply/my-account-postulant/my-account-postulant.component";
import { EmployeerpruebaComponent } from './Enterprise/employeerprueba/employeerprueba.component';
import { LoginRegisterComponent } from './Security/login-register/login-register.component';
import { ChoosePostulantOrEmployerComponent } from './Public/choose-postulant-or-employer/choose-postulant-or-employer.component';
import { EmployeerNewComponent } from './Enterprise/employeer-new/employeer-new.component';
import { PostulantNewComponent } from './Apply/postulant-new/postulant-new.component';
import { MainNavEmployeerComponent } from './Public/main-nav-employeer/main-nav-employeer.component';
import {EmployeerService} from "./Shared/Service/employeer.service";
import {PostulantService} from "./Shared/Service/postulant.service";
import {MatTabsModule} from "@angular/material/tabs";
import { ChangepasswordComponent } from './Security/changepassword/changepassword.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import { InterviewsPostulantApiComponent } from './Ability/interviews-postulant-api/interviews-postulant-api.component';
import { InterviewPostulantAllComponent } from './Ability/interview-postulant-all/interview-postulant-all.component';
import { DialogContratComponent } from './Public/dialog-changes-saved-successfully/dialog-contrat.component';
import {MatDialogModule} from "@angular/material/dialog";
import { DialogJobNewComponent } from './Public/dialog-job-new/dialog-job-new.component';
import { MyadsComponent } from './Public/myads/myads.component';
import { MypostulationsComponent } from './Result/mypostulations/mypostulations.component';
import { ModifyPersonalInformationPostulantComponent} from "./Apply/modify-personal-information-postulant/modify-personal-information-postulant.component";
import { ModifyPersonalInformationEmployeerComponent } from './Enterprise/modify-personal-information-employeer/modify-personal-information-employeer.component';
import {MyAccountEmployeerComponent} from "./Enterprise/my-account-employeer/my-account-employeer.component";
import { SelectpostulantsComponent } from './Result/selectpostulants/selectpostulants.component';
import { NewInterviewComponent } from './Ability/new-interview/new-interview.component';
import { MyadInformationComponent } from './Public/myad-information/myad-information.component';
import {MatMenuModule} from '@angular/material/menu';
import { SelectpostulantsMoreinfoComponent } from './Result/selectpostulants-moreinfo/selectpostulants-moreinfo.component';
import { ModifyProfessionalProfileComponent } from './Enterprise/modify-professional-profile/modify-professional-profile.component';
import { ModifyCompanyProfileComponent } from './Enterprise/modify-company-profile/modify-company-profile.component';
import { TermsAndConditionsComponent } from './Public/terms-and-conditions/terms-and-conditions.component';
import { MypostulantionInformationComponent } from './Result/mypostulantion-information/mypostulantion-information.component';
import {JobOfferNewComponentComponent} from "./Enterprise/job-offer-new-component/job-offer-new-component.component";

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
