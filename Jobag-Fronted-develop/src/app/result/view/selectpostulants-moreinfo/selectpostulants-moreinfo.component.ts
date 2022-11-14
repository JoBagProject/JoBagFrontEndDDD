import { Component, OnInit } from '@angular/core';
import {PostulantjobsService} from "../../../shared/Service/postulantjobs.service";
import {JobsApiService} from "../../../shared/Service/jobs-api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Postulantjobs} from "../../../shared/Interface/postulantjobs";
import {ProfilePostulant} from "../../../shared/Interface/profile-postulant";
import {ProfilepostulantService} from "../../../shared/Service/profilepostulant.service";
import {PostulantService} from "../../../shared/Service/postulant.service";
import {Postulant} from "../../../shared/Interface/postulant";
import {Job} from "../../../shared/Interface/job";

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
