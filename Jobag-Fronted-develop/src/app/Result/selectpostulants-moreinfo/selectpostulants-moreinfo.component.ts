import { Component, OnInit } from '@angular/core';
import {PostulantjobsService} from "../../Shared/Service/postulantjobs.service";
import {JobsApiService} from "../../Shared/Service/jobs-api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Postulantjobs} from "../../Shared/Interface/postulantjobs";
import {ProfilePostulant} from "../../Shared/Interface/profile-postulant";
import {ProfilepostulantService} from "../../Shared/Service/profilepostulant.service";
import {PostulantService} from "../../Shared/Service/postulant.service";
import {Postulant} from "../../Shared/Interface/postulant";
import {Job} from "../../Shared/Interface/job";

@Component({
  selector: 'app-selectpostulants-moreinfo',
  templateUrl: './selectpostulants-moreinfo.component.html',
  styleUrls: ['./selectpostulants-moreinfo.component.css']
})
export class SelectpostulantsMoreinfoComponent implements OnInit {

  postulantId!:number
  jobooferId!: number
  profilePostulants:Array<ProfilePostulant>=[];
  postulantData!: Postulant;
  constructor(private profilePostulant_service: ProfilepostulantService, private jobOffer_service: JobsApiService,private postulant_service: PostulantService,
              private postulantjobs:PostulantjobsService,
              private router: Router,
              private route: ActivatedRoute) {
    this.postulantData={}as Postulant
  }



  ngOnInit(): void {
    this.route.params.subscribe(params=>this.postulantId=params.postulantjobsId);
   this.getProfilebyPostulantId()
    this.getPostulantById()
console.log(this.postulantId)
  }


  getProfilebyPostulantId() {

      this.profilePostulant_service.getProfileByPostulantId(this.postulantId)
        .subscribe((response: any) => {
          this.profilePostulants = response.content;
          console.log('oa',response.content);
        });

  }

  getPostulantById() {

    this.postulant_service.getPostulantById(this.postulantId)
      .subscribe((response: any) => {
        this.postulantData = response
        console.log('123', this.postulantData);
      });

  }



}
