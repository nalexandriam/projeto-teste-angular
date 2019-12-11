import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import {AddClientModalComponent} from '../add-client-modal/add-client-modal.component';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';



@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
Clientes = [];
cliente;
form;
count = 0;
editando= false;


  constructor(
    private matDialog: MatDialog,
    private route: Router,
    private formBuilder: FormBuilder
    ){ 
      this.form = formBuilder.group({
        name:"",
        sobrenome:"",
        telefone:""
      });
    };

  onDialog(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {id:this.count++};
    const dialogRef =this.matDialog.open(AddClientModalComponent,dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => {
          if(!data.invalid)
          this.Clientes.push(data);
          console.log("Dialog output:", data);}
    );
  }

  sair(){
    this.route.navigate(["/login"]);
  }

  deleteClient(id){
    console.log(id);
    var tempArray=[]
    for(let i of this.Clientes)
      if(+i.id !== +id)
       tempArray.push(i);
    this.Clientes = tempArray; 
  }
  CancelEditing(){
    this.editando = false;
  }
  editar(){
    this.editando = true;
  }
  saveEdit(formValue,client){
    if(formValue.name =="")return;
    
    formValue.id = this.count++;
    let j = 0;
    let clientId = client.id;
    for(let i of this.Clientes){
      if(+i.id === +clientId){
        this.Clientes[j]=formValue;
        };
      j++;
    };
      this.editando = false;
  }
  ngOnInit() {
    this.Clientes.push({
      name:'Natã',
      sobrenome:'Alexandria Menezes',
      id:this.count++
    });
    this.Clientes.push({
      name:'maxine',
      sobrenome:'Alexandria Menezes',
      id:this.count++
    });
  }

}