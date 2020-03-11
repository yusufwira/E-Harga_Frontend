import { Component, OnInit,TemplateRef  } from '@angular/core';
import { UsersServiceService } from '../users-service.service';
import { DatabaseServiceService } from '../database-service.service';
import { AppComponent } from '../app.component';
import { NbDialogService } from '@nebular/theme';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public db:UsersServiceService,public us:DatabaseServiceService,private ap: AppComponent,private dialogService: NbDialogService,private router: Router) { }


  token ='';
  username="";
  password
  ngOnInit() {
  	
  }

  inputUsername(event:any){
  	this.username = event.target.value;
  }
  inputPassword(event:any){
  	this.password = event.target.value;
  }

  action(dialog: TemplateRef<any>){
  	this.db.username = this.username;
    localStorage.setItem('username',this.username);
  	this.db.password = this.password;
  	this.db.login().subscribe((data) => {
  		this.token = data['access_token']
  		localStorage.setItem('token',this.token) 
      this.ap.ngOnInit();  		
  		console.log(this.token);
      this.router.navigate(['/home']);
  	},(error)=>{  
      this.dialogService.open(dialog, { context: 'Maaf Username dan Password Salah' });
    });
  }




}
