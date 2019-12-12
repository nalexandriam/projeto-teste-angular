import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import {AddClientModalComponent} from '../add-client-modal/add-client-modal.component';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import { AuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';




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
apagando= false;
user: SocialUser;
loggedIn: boolean;
buscando = false;
resultados = [];

  constructor(
    private matDialog: MatDialog,
    private route: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
    ){ 
      this.form = formBuilder.group({
        name:"mcloudad",
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

  editClientDialog(client){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {edit:true,client};
    const dialogRef =this.matDialog.open(AddClientModalComponent,dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => {
          if(!data.invalid)
            this.saveEdit(data);
          console.log("Dialog output:", data);}
    );

  }

   signOut(): void {
  this.authService.signOut();
}
  sair(){
    this.signOut();
    this.loggedIn = false;
    this.route.navigate(["/login"],{queryParams:{logout:true}});
    
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
    this.apagando = false;
  }
  editar(){
    this.apagando = true;

  }
  saveEdit(client){
    console.log(client);
    let j = 0;
    let clientId = client.id;
    for(let i of this.Clientes){
      if(+i.id === +clientId){
        this.Clientes[j]=client;
        };
      j++;
    };
      console.log(this.form) 
  };

  buscarCliente(cliente){
   
    console.log( cliente.target.value)
    for(let i of this.Clientes){
      if(i.name ===  cliente.target.value){
        this.resultados.push(i);
      }
    };
    console.log(this.resultados);
  }


  ngOnInit() {
    

    this.authService.authState.subscribe((user) => {
    this.user = user;
    this.loggedIn = (user != null);
    console.log(this.user);
  });


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
    this.Clientes.push({
      name:'Natã',
      sobrenome:'Alexandria Menezes',
      id:this.count++
    });
    this.Clientes.push({
      name:'maxine',
      sobrenome:'Alexandria Menezes',
      id:this.count++
    });this.Clientes.push({
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