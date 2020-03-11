import { Component, OnInit } from '@angular/core';
import { HspkServiceService } from '../hspk-service.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-hspk',
  templateUrl: './hspk.component.html',
  styleUrls: ['./hspk.component.scss']
})
export class HspkComponent implements OnInit {

  constructor(public db:HspkServiceService,private router: Router) { }

  datas=[];
  placeholders = [];
  pageSize = 3;
  pageToLoadNext = 0;
  loading = false;
  hak:boolean = false;
  ngOnInit() {
  	
    // this.db.updateHspk().subscribe((data) => {
    //   console.log(data);
    // });


  	this.db.getTableHspk().subscribe((data) => {
  		this.datas = data; 
      this.penambahanHarga(); 

  	});

    if(localStorage.getItem('hak_akses') == "Penyusun"){
      this.hak = true
    }


    // this.loadNext();
    
  }

  pro ='';
  datassh=[];
  datasbu=[];
  totalssh ='';
  totalsbu = '';
  total ='';
  profit ='';
  subtotal=[];

  penambahanHarga(){

    for (var i = 0; i < this.datas.length; ++i) {
     
       this.db.id = this.datas[i].id;
       this.db.getDetailHspk().subscribe((data) => {
         this.datassh = data[0];
         this.datasbu = data[1];
         this.pro = data[2].profit;
         this.perhitungan();  
         //console.log(this.pro);
       });
    }
    
  }

   perhitungan(){
      //console.log(this.datassh);
    var totalssh = 0; 
    for (var i = 0; i < this.datassh.length; ++i) {
        var uang = parseInt(this.datassh[i].harga_final);
        var jumlah = parseInt(this.datassh[i].jumlah);
        var hasil = uang * jumlah;
        //this.datassh[i].ssh_id = this.convertToRupiah(hasil);
        totalssh += hasil;
        this.datassh[i].harga_final = this.convertToRupiah(this.datassh[i].harga_final)
        
    }
    
    var totalsbu = 0; 
    for (var i = 0; i < this.datasbu.length; ++i) {
        var uang = parseInt(this.datasbu[i].harga_final);
        var jumlah = parseInt(this.datasbu[i].jumlah);
        var hasil = uang * jumlah
        //this.datasbu[i].sbu_id = this.convertToRupiah(hasil);
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
     //this.subtotal = this.convertToRupiah(subtotal);
     this.subtotal.push(this.convertToRupiah(subtotal));


     this.db.harga = subtotal.toString();
     this.db.updateHspkHarga().subscribe((data) => {
      
     });
     
  }

  convertToRupiah(angka)
  {
    var rupiah = '';    
    var angkarev = angka.toString().split('').reverse().join('');
    for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
    return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('');
  }


  DeleteHspk(id){
    this.db.deleteHspk(id).subscribe((data)=>{
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
      this.penambahanHarga();
    })
  }

  // loadNext() {
  //   if (this.loading) { return }
  //     console.log("dfsdf")
  //   this.loading = true;
  //   this.placeholders = new Array(this.pageSize);
  //   this.db.getTableHspkLimit(this.pageToLoadNext, this.pageSize)
  //     .subscribe(news => {
  //       this.placeholders = [];
  //       this.datas.push(...news);
  //       this.loading = false;
  //       this.pageToLoadNext++;
  //     });
  // }

  

}
