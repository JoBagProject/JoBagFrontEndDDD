import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Security/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";


import { ChoosePostulantOrEmployerComponent } from './Public/choose-postulant-or-employer/choose-postulant-or-employer.component';
import {MatDividerModule} from "@angular/material/divider";
import { PostulantNewComponent } from './Apply/postulant-new/postulant-new.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChoosePostulantOrEmployerComponent,
    PostulantNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
