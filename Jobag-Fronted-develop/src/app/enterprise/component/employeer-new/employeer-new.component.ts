import { Component, OnInit } from '@angular/core';
import {EmployeerService} from "../../../shared/Service/employeer.service";
import {Employeer} from "../../../shared/Interface/employeer";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employeer-new',
  templateUrl: './employeer-new.component.html',
  styleUrls: ['./employeer-new.component.css']
})
export class EmployeerNewComponent implements OnInit {


  employeerData: Employeer = {} as Employeer;
  constructor(private employeerApiService: EmployeerService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  AddEmployeer(): void{
    const newEmployeer = {firstname: this.employeerData.firstname, lastname: this.employeerData.lastname, email: this.employeerData.email
      ,number: this.employeerData.number,password: this.employeerData.password,document: this.employeerData.document,posicion: this.employeerData.posicion};


    if (this.employeerData.firstname == null || this.employeerData.lastname == null || this.employeerData.email == null ||
      this.employeerData.number == null || this.employeerData.password  == null || this.employeerData.document  == null ||
      this.employeerData.posicion == null){
      alert('Complete todos los campos correctamente');
    }
    else {
      this.employeerApiService.addEmployeer(newEmployeer).subscribe((response: any) => {
        this._router.navigate(['/login']);
      });
    }
  }

}
