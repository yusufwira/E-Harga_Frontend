import { Component, OnInit, TemplateRef } from '@angular/core';
import { UsersServiceService } from '../users-service.service';
import {Router} from "@angular/router";
import { NbDialogService } from '@nebular/theme';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  constructor(public db:UsersServiceService, private router: Router,private dialogService: NbDialogService) { }

  username ='';
  password ='';
  nip ='';
  nama ='';
  email ='';
  noTelp ='';
  unit_id='';
  dinas ='';
  dinasvalue:string;


  hak :boolean= false;
  hakAkses='';

  ngOnInit() {
  	if(localStorage.getItem('hak_akses') == "Penyusun"){    		
  		this.hak= true;
  	}
  	
  }

  inputUsername(event:any){
  	this.username = event.target.value;
  }

  inputPassword(event:any){
  	this.password = event.target.value;
  }

  inputNip(event:any){
  	this.nip = event.target.value;
  }

  inputNama(event:any){
  	this.nama = event.target.value;
  }

  inputEmail(event:any){
  	this.email = event.target.value;
  }

  inputNotelp(event:any){
  	this.noTelp = event.target.value;
  }


   inputUnitid(event:any){
  	this.unit_id = event.target.value;
  }



  back(){
  	this.router.navigate(['profile/setting'])
  }



  action(dialog: TemplateRef<any>){
  	if(localStorage.getItem('hak_akses') == "Penyusun"){
  		this.dinas = this.dinasvalue;
  		console.log(this.dinasvalue);
  		this.hakAkses ='Admin OPD'  	
  	}
  	else{
  		this.dinas = localStorage.getItem('dinas');
  		this.hakAkses = 'Operator OPD'
  	}
  	//console.log(this.username,'\n',this.password,'\n',this.nip,'\n',this.nama,'\n',this.email,'\n', this.noTelp,'\n',this.unit_id,'\n',this.dinas)
  	this.db.username = this.username;
  	this.db.password = this.password;
  	this.db.nip  =this.nip;
  	this.db.nama = this.nama;
  	this.db.email = this.email;
  	this.db.no_telp = this.noTelp;
  	this.db.unit_id = this.unit_id;
  	this.db.dinas = this.dinas;
  	//console.log(this.dinas)
  	this.db.hak_akses1 = this.hakAkses;
  	this.db.AddUser().subscribe((data) => {
       console.log(data);
       this.router.navigate(['profile/setting'])
    },(error)=>{
    	this.dialogService.open(dialog, { context: 'Maaf Data yang anda berikan kurang benar' });
    });
  }

}
