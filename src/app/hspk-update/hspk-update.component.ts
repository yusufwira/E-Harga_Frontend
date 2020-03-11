import { Component, OnInit } from '@angular/core';
import { HspkServiceService } from '../hspk-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hspk-update',
  templateUrl: './hspk-update.component.html',
  styleUrls: ['./hspk-update.component.scss']
})
export class HspkUpdateComponent implements OnInit {

  constructor(public db:HspkServiceService,public route:ActivatedRoute) { }

  idparam = '';
  kode ='';
  nama ='';
  satuan ='';
  pro ='';
  tag ='';

  datassh=[];
  datasbu=[];
  totalssh ='';
  totalsbu = '';
  total ='';
  profit ='';
  subtotal='';

  ngOnInit() {
  	this.db.id = this.route.snapshot.params['id'];
    this.idparam = this.route.snapshot.params['id'];
  	this.db.getDetailHspk().subscribe((data) => {
  		console.log(data[2]);
  		this.kode = data[2].kode; 
  		this.nama = data[2].nama;
  		this.satuan = data[2].satuan;
      this.pro = data[2].profit;
      this.tag = data[2].tag_pencarian;
  		this.datassh = data[0];
  		this.datasbu = data[1];  
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

      var totalsbu = 0; 
      for (var i = 0; i < this.datasbu.length; ++i) {
          var uang = parseInt(this.datasbu[i].harga_final);
          var jumlah = parseInt(this.datasbu[i].jumlah);
          var hasil = uang * jumlah
          this.datasbu[i].sbu_id = this.convertToRupiah(hasil);
          totalsbu += hasil;
          this.datasbu[i].harga_final = this.convertToRupiah(this.datasbu[i].harga_final)
      }

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
  inputProfit(event:any){

     this.pro = event.target.value;

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


   inputSBU = [];
   jumlahSBU = [];
   pilihSBU(id){
   	 this.inputSBU.push(id);
   	 this.jumlahSBU.push(this.jumlahsbu);
   	 console.log(this.inputSBU, this.jumlahSBU);
   }


   updateHspk(){   
   	this.db.id = this.route.snapshot.params['id'];
   	this.db.kode = this.kode;
   	this.db.nama = this.nama;
   	this.db.satuan = this.satuan;
   	this.db.tag = this.tag;
   	this.db.profit = this.pro;
   
   	if(this.inputSSH.length == 0 && this.inputSBU.length == 0){
   		
   		this.db.pilihanUpdate = "A";
   	}
   	else if(this.inputSBU.length == 0){
   		this.db.pilihanUpdate="B";
   		this.db.shh = this.inputSSH;
   		this.db.shh_jumlah = this.jumlahSSH;
   		console.log (this.jumlahSSH);
   	}
   	else if(this.inputSSH.length == 0){
   		this.db.pilihanUpdate = "C";
   		this.db.sbu = this.inputSBU;
   		this.db.sbu_jumlah = this.jumlahSBU;
   	}
   	else{
   		this.db.pilihanUpdate = "D";
   		this.db.shh = this.inputSSH;
	   	this.db.sbu = this.inputSBU;

	   	this.db.shh_jumlah = this.jumlahSSH;
	   	this.db.sbu_jumlah = this.jumlahSBU;
   	}

   	this.db.updateHspk().subscribe((data) => {
  		console.log(data);
  	});
   }


}
