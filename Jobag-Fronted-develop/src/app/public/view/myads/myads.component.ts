import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Job} from "../../../shared/Interface/job";
import {JobsApiService} from "../../../shared/Service/jobs-api.service";

@Component({
  selector: 'app-myads',
  templateUrl: './myads.component.html',
  styleUrls: ['./myads.component.css']
})
export class MyadsComponent implements OnInit {
  panelOpenState: boolean=false;
  events: string[] = [];
  opened: boolean=false;
  jobsData:Job;
  jobs:Array<Job>=[];
  employeerId:number=0;

  constructor(private route:ActivatedRoute, private jobs_service : JobsApiService) {
    this.jobsData={} as Job;
    this.route.params.subscribe(params=>this.employeerId=params.employeerId)

  }

  ngOnInit(): void {
    this.getAllJobsAByEmployeerId()
    console.log(this.employeerId);

  }

  getAllJobsAByEmployeerId() : void{
    this.jobs_service.getAllJobsByEmployeerId(this.employeerId).subscribe((response: any)=>{
      this.jobs=response.content;
      console.log(this.jobs);

    })
  }


}
