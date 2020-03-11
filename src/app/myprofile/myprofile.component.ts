import { Component, OnInit, TemplateRef } from '@angular/core';
import { UsersServiceService } from '../users-service.service';
import {Router} from "@angular/router";
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {

  constructor(public db:UsersServiceService, private router: Router,private dialogService: NbDialogService) { }
  nama ="";
  email ="";
  notelp ="";


  ngOnInit() {
  	this.db.getUsers().subscribe((data) => {
  		console.log(data);
  		this.nama = data.nama;
  		this.email = data.email;
  		this.notelp = data.no_telp;
  		
  	});
  }


  inputNama(event:any){
  	this.nama = event.target.value;
  }

  inputEmail(event:any){
  	this.email = event.target.value;
  }

  inputNotelp(event:any){
  	this.notelp = event.target.value;
  }


  action(dialog: TemplateRef<any>){
  	//console.log(this.nama, this.email, this.notelp);
  	this.db.nama = this.nama;
  	this.db.email = this.email;
  	this.db.no_telp = this.notelp;
  	this.db.updateInfoUser().subscribe((data) => {
  		console.log(data);
  		this.router.navigate(['/home'])
  	},(error)=>{
  		 this.dialogService.open(dialog, { context: 'Maaf data yang anda berikan salah' });
  	});
  }

}
