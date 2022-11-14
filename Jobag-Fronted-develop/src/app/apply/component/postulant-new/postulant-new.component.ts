import { Component, OnInit } from '@angular/core';
import {PostulantService} from "../../../shared/Service/postulant.service";
import {Postulant} from "../../../shared/Interface/postulant";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-postulant-new',
  templateUrl: './postulant-new.component.html',
  styleUrls: ['./postulant-new.component.css']
})
export class PostulantNewComponent implements OnInit {

  postulantForm!: NgForm;
  postulantData: Postulant = {} as Postulant;
  constructor(private postulantApiService: PostulantService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  AddPostulant(): void{
    const newPostulant = {firstname: this.postulantData.firstname, lastname: this.postulantData.lastname, email: this.postulantData.email
    ,number: this.postulantData.number,password: this.postulantData.password,document: this.postulantData.document,civil_status: this.postulantData.civil_status};

    if (this.postulantData.firstname == null || this.postulantData.lastname == null || this.postulantData.email == null ||
        this.postulantData.number == null || this.postulantData.password  == null || this.postulantData.document  == null ||
        this.postulantData.civil_status == null){
      alert('Complete todos los campos correctamente');
    }
    else {
      this.postulantApiService.addPostulants(newPostulant).subscribe((response: any) => {
        this._router.navigate(['/login']);
      });
    }
  }
}



