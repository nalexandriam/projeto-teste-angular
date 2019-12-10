import { Component, OnInit, Inject} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';



@Component({
  selector: 'app-add-client-modal',
  templateUrl: './add-client-modal.component.html',
  styleUrls: ['./add-client-modal.component.css']
})
export class AddClientModalComponent implements OnInit {
form;
teste;
data;
  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddClientModalComponent>,
    @Inject(MAT_DIALOG_DATA)data
  ) {
      this.form = formBuilder.group({
      name:'name',
      sobrenome:'sobrenome',
      id:'-'
      });
      this.data = data;
    
  };
  
  save(){
    this.form.value.id = this.data.id;
    if(this.form.value.name !== '' && this.form.value !== '')
    this.dialogRef.close(this.form.value);
    console.log('sera enviado'+this.form.value.id);
  }
  close(){
    this.dialogRef.close({invalid:true});
  }
  ngOnInit() {
  }

}