import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MaterialModule } from './material.module';
import {RouterModule} from '@angular/router';
import { ManagementComponent } from './management/management.component';
import {AddClientModalComponent} from './add-client-modal/add-client-modal.component';
import { AgmCoreModule } from '@agm/core';
import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider } from 'angularx-social-login';

const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('2785017191568010')
  }
]);
export function provideConfig() {
  return config;
}

@NgModule({
  imports:      [ BrowserModule, SocialLoginModule,ReactiveFormsModule, MaterialModule, BrowserAnimationsModule,
  AgmCoreModule.forRoot({apiKey:'AIzaSyBVsiSnscjSyUMWZL-y5BKrtdQfjhh4SNc'}),
  RouterModule.forRoot([
    {path:'', pathMatch:'full',redirectTo:'login'},
    {path:'login',component:LoginFormComponent},
    {path:'management', component:ManagementComponent},
    {path:'modal', component:AddClientModalComponent}
  ])],
  declarations: [ AppComponent, LoginFormComponent,ManagementComponent,AddClientModalComponent],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
}
