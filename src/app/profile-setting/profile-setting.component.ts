import { Component, OnInit } from '@angular/core';
import { PengumumanServiceService } from '../pengumuman-service.service';
import { UsersServiceService } from '../users-service.service';
import {Router} from "@angular/router";
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'app-profile-setting',
  templateUrl: './profile-setting.component.html',
  styleUrls: ['./profile-setting.component.scss']
})
export class ProfileSettingComponent implements OnInit {

  constructor(public db:PengumumanServiceService, public user:UsersServiceService, private router: Router,private dialogService: NbDialogService) { }
  pengumuman:string='';
  data = [];
  dataAdmin = [];
  dataOperator =[];
  akses:boolean = false;

       
  ngOnInit() {

  	this.db.getPengumuman().subscribe((data) => {
  		this.pengumuman = data[0].pengumuman;  
  		//console.log(data[0].pengumuman)		  		  		  		  	
  		
  	});

    
    this.user.getDetail().subscribe((data) => {
       this.dataAdmin = data[0]; 
       this.dataOperator = data[1];            
      
    });

    if(localStorage.getItem('hak_akses') == 'Penyusun'){
      this.akses = true;
      console.log(this.akses)
    
    }


  }

   inputPengumuman(event:any){
    this.pengumuman = event.target.value;
  }

  action(){
  //console.log(this.pengumuman);
  		this.db.pengumuman = this.pengumuman;
  		this.db.postPengumuman()
 			.subscribe((data) => {
  				console.log(data);
  		});
   }

}
