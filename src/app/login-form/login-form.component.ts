import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as credenciais from '../credenciais.json';
import {Router} from '@angular/router';

@Component({
  selector: 'my-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']

})
export class LoginFormComponent {
  form;
  error;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ){
    this.form = this.formBuilder.group({
      login:'login',
      senha:'senha'
    });
  };
  

  submit() {
    if (this.form.valid) {
     if(credenciais.senha === this.form.value.senha &&
     credenciais.login === this.form.value.login ){
        this.error='';
        this.router.navigate(['/management']);
     }else {
        this.error = 'Usuario ou senha incorretos';
      }
      
    }
  }
  //@Input() error: string | null;

 //@Output() submitEM = new EventEmitter();
}
