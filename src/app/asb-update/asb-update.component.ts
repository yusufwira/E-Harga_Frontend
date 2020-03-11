import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsbServiceService } from '../asb-service.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-asb-update',
  templateUrl: './asb-update.component.html',
  styleUrls: ['./asb-update.component.scss']
})
export class AsbUpdateComponent implements OnInit {

  idparam = ';'
  kode ='';
  nama ='';
  satuan ='';
  tag='';

  datassh=[];
  datahspk=[];
  totalssh ='';
  totalhspk = '';

  total ='';
  profit ='';
  subtotal='';

  constructor(public db:AsbServiceService,private router: Router,public route:ActivatedRoute) { }

  ngOnInit() {
  	this.db.id = this.route.snapshot.params['id'];
    this.idparam = this.route.snapshot.params['id'];
  	this.db.getDetailAsb().subscribe((data) => {

  		this.kode = data[2].kode; 
  		this.nama = data[2].nama;
  		this.satuan = data[2].satuan;
      	this.tag = data[2].tag_pencarian;
  		this.datassh = data[0];
  		this.datahspk = data[1];  
        this.perhitungan();		  		  		  		  	  		
  	});
  }

   perhitungan(){
     
    var totalssh = 0; 
    for (var i = 0; i < this.datassh.length; ++i) {
        var uang = parseInt(this.datassh[i].harga_final);
        var jumlah = parseInt(this.datassh[i].jumlah);
        var hasil = uang * jumlah;
        this.datassh[i].ssh_id = this.convertToRupiah(hasil);
        totalssh += hasil;
        this.datassh[i].harga_final = this.convertToRupiah(this.datassh[i].harga_final)
        
    }
    
    var totalhspk = 0; 
    for (var i = 0; i < this.datahspk.length; ++i) {
        var uang = parseInt(this.datahspk[i].harga_total);
        var jumlah = parseInt(this.datahspk[i].jumlah);
        var hasil = uang * jumlah
        this.datahspk[i].hspk_id = this.convertToRupiah(hasil);
        totalhspk += hasil;
        this.datahspk[i].harga_total = this.convertToRupiah(this.datahspk[i].harga_total)
    }
     //console.log(totalsbu);
     this.totalssh = this.convertToRupiah(totalssh);
     this.totalhspk = this.convertToRupiah(totalhspk);

  
     var total = totalssh+totalhspk;
    

    
     this.subtotal = this.convertToRupiah(total);


      this.db.harga = total.toString();
     this.db.updateAsbHarga().subscribe((data) => {
       console.log(data);
     });
     
  }

   convertToRupiah(angka)
  {
    var rupiah = '';    
    var angkarev = angka.toString().split('').reverse().join('');
    for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
    return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('');
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


   updateASB(){   
   	this.db.id = this.route.snapshot.params['id'];
   	this.db.kode = this.kode;
   	this.db.nama = this.nama;
   	this.db.satuan = this.satuan;
   	this.db.tag = this.tag;
   	
   
   	if(this.inputSSH.length == 0 && this.inputHSPK.length == 0){
   		
   		this.db.pilihanUpdate = "A";
   	}
   	else if(this.inputHSPK.length == 0){
   		this.db.pilihanUpdate="B";
   		this.db.shh = this.inputSSH;
   		this.db.shh_jumlah = this.jumlahSSH;
   		console.log (this.jumlahSSH);
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

   	this.db.updateAsb().subscribe((data) => {
  		console.log(data);
  	});
   }

}
