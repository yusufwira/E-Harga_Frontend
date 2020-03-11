import { Component, OnInit,Input,TemplateRef } from '@angular/core';
import { DatabaseServiceService } from '../database-service.service';
import { SbuServiceService } from '../sbu-service.service';
import { HspkServiceService } from '../hspk-service.service';
import { NbDialogService } from '@nebular/theme';
import {Router} from "@angular/router";



@Component({
  selector: 'app-hspk-create',
  templateUrl: './hspk-create.component.html',
  styleUrls: ['./hspk-create.component.scss']
})
export class HspkCreateComponent implements OnInit {

  constructor(public db:DatabaseServiceService,private router: Router,public us:SbuServiceService,public hs:HspkServiceService, private dialogService: NbDialogService) { }
  datassh = [];
  datasbu = [];
  nama ='';
  kode ='';
  satuan ='';
  profit='';
  tag='';

  


  ngOnInit() {
  	this.db.getTableSSh().subscribe((data) => {
  		this.datassh = data;  		
  		//console.log(this.datassh);  		  		  		  	
  		for (var i = 0; i < this.datassh.length; ++i) {
  			this.datassh[i].harga_final = this.convertToRupiah(this.datassh[i].harga_final);
  		}
  	});

  	this.us.getTableSBU().subscribe((data) => {
  		this.datasbu = data;  		  		  		  		  	
  		for (var i = 0; i < this.datasbu.length; ++i) {
  			this.datasbu[i].harga_final = this.convertToRupiah(this.datasbu[i].harga_final);
  			
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
  inputProfit(event:any){
     this.profit = event.target.value;

   }
  inputTag(event:any){
     this.tag = event.target.value;

   }

   jumlahssh ='';
   inputJumlahSSH(event:any){
     this.jumlahssh = event.target.value;
   }
   jumlahsbu ='';
   inputJumlahSBU(event:any){
     this.jumlahsbu = event.target.value;
   }

   inputSSH = [];
   jumlahSSH = [];
   pilihSSH(id){
   	 this.inputSSH.push(id);
   	 this.jumlahSSH.push(this.jumlahssh);
   	 console.log(this.inputSSH, this.jumlahSSH);
   }

   detailSSH(id){

   }


   inputSBU = [];
   jumlahSBU = [];
   pilihSBU(id){
   	 this.inputSBU.push(id);
   	 this.jumlahSBU.push(this.jumlahsbu);
   	 console.log(this.inputSBU, this.jumlahSBU);
   }

   detailSBU(id){
     
   }

   postHspk(dialog: TemplateRef<any>){
   	this.hs.kode = this.kode;
   	this.hs.nama = this.nama;
   	this.hs.satuan = this.satuan;
   	this.hs.tag = this.tag;
   	this.hs.profit = this.profit;

     if(this.inputSSH.length == 0 && this.inputSBU.length == 0){
       this.hs.pilihanUpdate = "A";
     }
     else if(this.inputSBU.length == 0){
       this.hs.pilihanUpdate = "B";
       this.hs.shh = this.inputSSH;
       this.hs.shh_jumlah = this.jumlahSSH;
     }
     else if(this.inputSSH.length == 0){
       this.hs.pilihanUpdate = "C";
       this.hs.sbu = this.inputSBU;
       this.hs.sbu_jumlah = this.jumlahSBU;
     }
     else{
       this.hs.pilihanUpdate = "D";
         this.hs.shh = this.inputSSH;
         this.hs.sbu = this.inputSBU;

         this.hs.shh_jumlah = this.jumlahSSH;
         this.hs.sbu_jumlah = this.jumlahSBU;
     }


   	this.hs.postHspk().subscribe((data) => {
  		console.log(data);
      this.router.navigate(['/hspk'])
  	},
     (error)=>{
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
