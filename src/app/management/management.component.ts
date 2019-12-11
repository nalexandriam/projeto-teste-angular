import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import {AddClientModalComponent} from '../add-client-modal/add-client-modal.component';
import {Router} from '@angular/router';



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
maps=true;
latitude=-10.9095;longitude=-37.0748;mapType="satellite";

  constructor(
    private matDialog: MatDialog,
    private route: Router
    ){ 
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
    var tempArray=[]
    for(let i of this.Clientes)
      if(+i.id !== +id)
       tempArray.push(i);
    this.Clientes = tempArray;
    
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