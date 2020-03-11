import { Component, OnInit } from '@angular/core';
import { AsbServiceService } from '../asb-service.service';
import {Router} from "@angular/router";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asb-detail',
  templateUrl: './asb-detail.component.html',
  styleUrls: ['./asb-detail.component.scss']
})
export class AsbDetailComponent implements OnInit {

  constructor(public db:AsbServiceService,private router: Router,public route:ActivatedRoute) { }

  idparam = ';'
  Kode ='';
  Nama ='';
  Satuan ='';

  datassh=[];
  datahspk=[];
  totalssh ='';
  totalhspk = '';

  total ='';
  profit ='';
  subtotal='';
  ngOnInit() {
  	this.db.id = this.route.snapshot.params['id'];
  	this.idparam = this.route.snapshot.params['id'];
  	this.db.getDetailAsb().subscribe((data) => {
  		this.Kode = data[2].kode; 
  		this.Nama = data[2].nama;
  		this.Satuan = data[2].satuan;     
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

}
