import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formLogin:FormGroup

  constructor(private form:FormBuilder){
    this.formLogin = this.form.group({
      usuario: ['',[Validators.email, Validators.required]],
      contrasena: ['',[Validators.required, Validators.minLength(8)]]
    })
  }

  hasErrors( controlName: string, errorType:string){
    return this.formLogin.get(controlName)?.hasError(errorType) && this.formLogin.get(controlName)?.touched
  }

  enviar(){
    console.log(this.formLogin)
  }

}