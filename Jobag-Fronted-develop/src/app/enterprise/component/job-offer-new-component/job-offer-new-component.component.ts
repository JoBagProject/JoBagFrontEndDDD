import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Job} from "../../../shared/Interface/job";
import {JobNewApiService} from "../../../shared/Service/job-new-api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DialogJobNewComponent} from "../../../public/component/dialog-job-new/dialog-job-new.component";

@Component({
  selector: 'app-job-offer-new-component',
  templateUrl: './job-offer-new-component.component.html',
  styleUrls: ['./job-offer-new-component.component.css']
})
export class JobOfferNewComponentComponent implements OnInit {
  jobOfferForm!: NgForm;
  jobOfferData: Job = {} as Job;

  employeerId!: number;

  constructor(private jobOfferApiService: JobNewApiService,
              private _router: Router,
              private route: ActivatedRoute,
              public dialog: MatDialog,) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params=>this.employeerId=params.employeerId);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogJobNewComponent, {});
    dialogRef.afterClosed().subscribe(res => {
      this._router.navigate(['/employeer/',this.employeerId]);
    })
  }

  AddJobOfferNew(): void{
    const newJobOffer = {description: this.jobOfferData.description,
      begin_date_offer: this.jobOfferData.begin_date_offer,
      final_date_offer: this.jobOfferData.final_date_offer,
      salary: this.jobOfferData.salary,
      direction: this.jobOfferData.direction,
      type: this.jobOfferData.type,
      title: this.jobOfferData.title };

    if(this.jobOfferData.description == null || this.jobOfferData.begin_date_offer == null || this.jobOfferData.final_date_offer == null ||
       this.jobOfferData.salary == null || this.jobOfferData.direction == null || this.jobOfferData.type == null || this.jobOfferData.title == null){
      alert("Complete todos los datos solicitados")      ;
    }
    else {
      this.jobOfferApiService.addJobOffer(newJobOffer, this.employeerId).subscribe((response: any) =>
      {
        this.openDialog();
      });
    }
  }

}
