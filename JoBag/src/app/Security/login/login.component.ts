import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../Shared/Services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validacion: boolean = false;

  @ViewChild("email") email! : ElementRef;
  @ViewChild("password") password! : ElementRef;

  constructor(private role_service : AuthService,
              private _router: Router) {
  }

  ngOnInit(): void {
    this.role_service.getRoleUser(1).subscribe((data:any) => {
        console.log(data);
    });
  }

  logIn():void{
    var mail = this.email.nativeElement.value;
    var contra = this.password.nativeElement.value;

    /*
    if(mail != null && contra != null){
      for (var i = 0; i < this.user.length; i++){
        if (mail == this.user[i].email && this.user[i].rol == 'admin'){
          this.validacion = true;
        }
        if (mail == this.user[i].email && this.user[i].rol == 'user'){
          this.validacion = false;
        }
      }
    }

    if (this.validacion){
      this._auth.login(mail, contra).then(res =>{
        if(this._auth.getvalidacion()){
          this._router.navigate(['/home']);
        }
      });
    }
    else {
      alert("Usuario incorrecto");
    }*/
  }

}
