import { Input, Component, Output, EventEmitter,OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as credenciais from '../credenciais.json';
import {Router} from '@angular/router';
import { AuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'my-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']

})
export class LoginFormComponent implements OnInit {
  form;
  error;
  user: SocialUser;
  loggedIn: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ){
    this.form = this.formBuilder.group({
      login:'login',
      senha:'senha'
    });
  };
signInWithFB(): void {
  this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
}


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
  ngOnInit(){
    this.authService.authState.subscribe((user) => {
    this.user = user;
    this.loggedIn = (user != null);
    if(this.loggedIn){
    this.router.navigate(["/management"]);
  }
    console.log(this.user);
  });
  
  }
  
  //@Input() error: string | null;

 //@Output() submitEM = new EventEmitter();
}
