import { Component, OnInit } from '@angular/core';
import {LoginRegisterService} from "../../../shared/Service/login-register.service";
import {EmployeerService} from "../../../shared/Service/employeer.service";
import {PostulantService} from "../../../shared/Service/postulant.service";
import {Router} from "@angular/router";
import {User} from "../../../shared/Interface/user";

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {


  constructor(private usersApi: LoginRegisterService, private employeerApi: EmployeerService, private postulantApi: PostulantService, private router: Router) {

    this.userData = {} as User;
  }

  newpassword!: string
  passwordexist!: string
  emailexist!: string

  ingresante!: number;

  userData!: User;
  comprobante: boolean = false;

  ngOnInit(): void {

  }

  getAllUsers(): void {
    this.usersApi.getAllUsers().subscribe((response: any) => {
      for (var i = 0; i < response.content.length; i++) {
        if (response.content[i].email == this.emailexist &&
          response.content[i].password == this.passwordexist)
        {
          this.userData = response.content[i];
          this.comprobante = true;

          const newUser = {
          id: this.userData.id,
          firstname: this.userData.firstname,
          lastname: this.userData.lastname,
          email: this.userData.email,
          number: this.userData.number,
          password: this.newpassword,
          document: this.userData.document
        };

          if (this.comprobante && this.newpassword != null){
            this.usersApi.updateUser(this.userData.id, newUser)
              .subscribe(response => {
                this.router.navigate(['/login'])
              });
          }
          else {
            alert('Complete todos los campos correctamente')
          }
        }
      }

      if (!this.comprobante){
        alert('Hubo un error en el cambio de contraseña, compruebe los datos nuevamente o intente más tarde');
      }

    });
  }

}
