import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, shareReplay} from "rxjs/operators";
import {Postulant} from "../../Shared/Interface/postulant";
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeerService} from "../../Shared/Service/employeer.service";
import {Employeer} from "../../Shared/Interface/employeer";
import {Job} from "../../Shared/Interface/job";

@Component({
  selector: 'app-my-account-employeer',
  templateUrl: './my-account-employeer.component.html',
  styleUrls: ['./my-account-employeer.component.css']
})
export class MyAccountEmployeerComponent {


  employeerData!: Employeer;
  employeerId!: number

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  ngOnInit(): void {

    this.getEmployeerId();
  }
  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private route: ActivatedRoute,private employeerApiService: EmployeerService) {
    this.employeerData={} as Employeer;
  }

  getEmployeerId(): void{
    this.employeerId = Number(this.route.params.subscribe(params => {
      this.employeerApiService.getEmployeerbyId(params.employeerId).subscribe((response: any)=> {
        this.employeerId = params.employeerId;
        this.employeerData=response
      });
    }));

  }

}

