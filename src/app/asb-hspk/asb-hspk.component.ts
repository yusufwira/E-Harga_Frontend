import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsbServiceService } from '../asb-service.service';
import { HspkServiceService } from '../hspk-service.service';

@Component({
  selector: 'app-asb-hspk',
  templateUrl: './asb-hspk.component.html',
  styleUrls: ['./asb-hspk.component.scss']
})
export class AsbHspkComponent implements OnInit {

  constructor(public db:HspkServiceService,public asb:AsbServiceService,public route:ActivatedRoute) { }

   datas = [];
  idparam =  this.route.snapshot.params['id'];

  ngOnInit() {
  	this.db.getTableHspk().subscribe((data) => {
  		this.datas = data;  
  		console.log(data);		  		  		  		  	
  		for (var i = 0; i < data.length; ++i) {
  			data[i].harga_total = this.convertToRupiah(data[i].harga_total);  			
  		}
  	});
  }

   convertToRupiah(angka)
	{
		var rupiah = '';		
		var angkarev = angka.toString().split('').reverse().join('');
		for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
		return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('');
	}

   jumlahhspk ='';
   inputJumlahHSPK(event:any){
     this.jumlahhspk = event.target.value;
   }

   inputHSPK = [];
   jumlahHSPK = [];
   pilihHSPK(id){
   	 this.inputHSPK.push(id);
   	 this.jumlahHSPK.push(this.jumlahhspk);
   	 console.log(this.inputHSPK, this.jumlahHSPK);
   }

   postAsbHspk(){
   	this.asb.id = this.route.snapshot.params['id'];
   	this.asb.hspk = this.inputHSPK;
   	this.asb.hspk_jumlah = this.jumlahHSPK;
   	this.asb.postAsbHspk().subscribe((data) => {
  		console.log(data);
  	});
   }

}
