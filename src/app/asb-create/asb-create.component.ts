import { Component, OnInit,Input,TemplateRef  } from '@angular/core';
import { DatabaseServiceService } from '../database-service.service';
import { HspkServiceService } from '../hspk-service.service';
import { AsbServiceService } from '../asb-service.service';
import {Router} from "@angular/router";
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'app-asb-create',
  templateUrl: './asb-create.component.html',
  styleUrls: ['./asb-create.component.scss']
})
export class AsbCreateComponent implements OnInit {

  constructor(public db:AsbServiceService,public sh:DatabaseServiceService,public hs:HspkServiceService,private router: Router,  private dialogService: NbDialogService) { }

  datassh = [];
  datahspk = [];
  nama ='';
  kode ='';
  satuan ='';
  tag='';
  ngOnInit() {
  	this.sh.getTableSSh().subscribe((data) => {
  		this.datassh = data;  		
  		//console.log(this.datassh);  		  		  		  	
  		for (var i = 0; i < this.datassh.length; ++i) {
  			this.datassh[i].harga_final = this.convertToRupiah(this.datassh[i].harga_final);
  		}
  	});


  	this.hs.getTableHspk().subscribe((data) => {
  		this.datahspk = data;  		  		  		  		  	
  		for (var i = 0; i < this.datahspk.length; ++i) {
  			this.datahspk[i].harga_total = this.convertToRupiah(this.datahspk[i].harga_total);
  			
  		}
  	});
  }

  inputKode(event:any){
     this.kode = event.target.value;

   }
  inputNama(event:any){
     this.nama = event.target.value;

   }
  inputSatuan(event:any){
     this.satuan = event.target.value;

   }
  
  inputTag(event:any){
     this.tag = event.target.value;

   }

   jumlahssh ='';
   inputJumlahSSH(event:any){
     this.jumlahssh = event.target.value;
   }
   jumlahhspk ='';
   inputJumlahHSPK(event:any){
     this.jumlahhspk = event.target.value;
   }

   inputSSH = [];
   jumlahSSH = [];
   pilihSSH(id){
   	 this.inputSSH.push(id);
   	 this.jumlahSSH.push(this.jumlahssh);
   	 console.log(this.inputSSH, this.jumlahSSH);
   }


   inputHSPK = [];
   jumlahHSPK = [];
   pilihHSPK(id){
   	 this.inputHSPK.push(id);
   	 this.jumlahHSPK.push(this.jumlahhspk);
   	 console.log(this.inputHSPK, this.jumlahHSPK);
   }

   postAsb(dialog: TemplateRef<any>){
   	this.db.kode = this.kode;
   	this.db.nama = this.nama;
   	this.db.satuan = this.satuan;
   	this.db.tag = this.tag;


     if(this.inputSSH.length == 0 && this.inputHSPK.length == 0){
       this.db.pilihanUpdate = "A";
     }
     else if(this.inputHSPK.length == 0){
       this.db.pilihanUpdate = "B";
       this.db.shh = this.inputSSH;
       this.db.shh_jumlah = this.jumlahSSH;
     }
     else if(this.inputSSH.length == 0){
       this.db.pilihanUpdate = "C";
       this.db.hspk = this.inputHSPK;
       this.db.hspk_jumlah = this.jumlahHSPK;
     }
     else{
       this.db.pilihanUpdate = "D";
         this.db.shh = this.inputSSH;
         this.db.hspk = this.inputHSPK;

         this.db.shh_jumlah = this.jumlahSSH;
         this.db.hspk_jumlah = this.jumlahHSPK;
     }


   	this.db.postAsb().subscribe((data) => {
  		console.log(data);
      this.router.navigate(['/asb'])
  	},(error)=>{
        this.dialogService.open(dialog, { context: 'asd'});
      });
   }

  convertToRupiah(angka)
	{
		var rupiah = '';		
		var angkarev = angka.toString().split('').reverse().join('');
		for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
		return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('');
	}

}
