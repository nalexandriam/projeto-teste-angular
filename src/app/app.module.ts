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

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule, MaterialModule, BrowserAnimationsModule,
  RouterModule.forRoot([
    {path:'', pathMatch:'full',redirectTo:'login'},
    {path:'login',component:LoginFormComponent},
    {path:'management', component:ManagementComponent},
    {path:'modal', component:AddClientModalComponent}
  ])],
  declarations: [ AppComponent, LoginFormComponent,ManagementComponent,AddClientModalComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
}
