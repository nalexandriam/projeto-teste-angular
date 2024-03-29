import { NgModule } from '@angular/core';

import {
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatDialogModule,
  MatFormFieldModule 
} from '@angular/material';
 

const modules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatDialogModule,
  MatFormFieldModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
