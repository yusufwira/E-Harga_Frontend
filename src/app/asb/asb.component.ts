import { Component, OnInit, TemplateRef  } from '@angular/core';
import { AsbServiceService } from '../asb-service.service';
import {Router} from "@angular/router";
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'app-asb',
  templateUrl: './asb.component.html',
  styleUrls: ['./asb.component.scss']
})
export class AsbComponent implements OnInit {

  constructor(public db:AsbServiceService,private router: Router, private dialogService: NbDialogService) { }
   datas=[];

   hak:boolean=false

  ngOnInit() {
  	this.db.getTableAsb().subscribe((data) => {
  		this.datas = data;  		  		  		  		  	  		
  	});

    if(localStorage.getItem('hak_akses') == "Penyusun"){
      this.hak = true
    }
  }

  DeleteAsb(id){
    this.db.deleteAsb(id).subscribe((data)=>{
      console.log(data);
      if(data == 'sukses'){
        this.ngOnInit();
      }
    })
  }

  cari='';
  search(event:any) {
    this.cari = event.target.value;
    this.db.keyword = this.cari;
     this.db.Search().subscribe((data)=>{
     this.datas = data;      
    })
  }



}
