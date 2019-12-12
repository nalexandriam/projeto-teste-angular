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
editar = false
  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddClientModalComponent>,
    @Inject(MAT_DIALOG_DATA)data
  ) {
      this.form = formBuilder.group({
      name:'',
      sobrenome:'',
      telefone:'',
      id:'-'
      });
      this.data = data;
    
  };
  
  save(){
    console.log(this.data)
    if(this.data.id)
    this.form.value.id = this.data.id;
    if(this.form.value.name !== '' && this.form.value !== '')
    this.dialogRef.close(this.form.value);
    console.log('sera enviado'+this.form.value.id);
  }
  close(){
    this.dialogRef.close({invalid:true});
  }
  ngOnInit() {
    if(this.data.edit){
      console.log("funciona")
      this.editar=true;
      this.form = this.formBuilder.group({
        name:this.data.client.name,
        sobrenome:this.data.client.sobrenome,
        telefone:this.data.client.telefone,
        id:this.data.client.id
      })
      }
  }

}