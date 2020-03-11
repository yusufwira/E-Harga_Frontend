import { Component, OnInit } from '@angular/core';
import { HspkServiceService } from '../hspk-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hspk-detail',
  templateUrl: './hspk-detail.component.html',
  styleUrls: ['./hspk-detail.component.scss']
})
export class HspkDetailComponent implements OnInit {

  constructor(public db:HspkServiceService,public route:ActivatedRoute) { }

  idparam = ';'
  Kode ='';
  Nama ='';
  Satuan ='';
  pro ='';

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
  		this.Kode = data[2].kode; 
  		this.Nama = data[2].nama;
  		this.Satuan = data[2].satuan;
      this.pro = data[2].profit;
  		this.datassh = data[0];
  		this.datasbu = data[1];  
      this.perhitungan();		  		  		  		  	  		
  	});


  }

  perhitungan(){
      //console.log(this.datassh);
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
     //console.log(totalsbu);
     this.totalssh = this.convertToRupiah(totalssh);
     this.totalsbu = this.convertToRupiah(totalsbu);

     var pro = parseInt(this.pro);
     var total = totalssh+totalsbu;
     var profit = total *(pro/100);
     var intPro = (profit | 0);
     var subtotal = total + intPro;

     this.total = this.convertToRupiah(total);
     this.profit = this.convertToRupiah(intPro);
     this.subtotal = this.convertToRupiah(subtotal);


     this.db.harga = subtotal.toString();
     this.db.updateHspkHarga().subscribe((data) => {
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

}
