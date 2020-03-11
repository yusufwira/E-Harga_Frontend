import { Component, OnInit } from '@angular/core';
import { SbuServiceService } from '../sbu-service.service';
import { HspkServiceService } from '../hspk-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hspk-sbu',
  templateUrl: './hspk-sbu.component.html',
  styleUrls: ['./hspk-sbu.component.scss']
})
export class HspkSbuComponent implements OnInit {

  constructor(public db:SbuServiceService,public hs:HspkServiceService,public route:ActivatedRoute) { }
  datas = [];
  idparam =  this.route.snapshot.params['id'];
  ngOnInit() {
  	this.db.getTableSBU().subscribe((data) => {
  		this.datas = data;  		  		  		  		  	
  		for (var i = 0; i < data.length; ++i) {
  			data[i].harga_final = this.convertToRupiah(data[i].harga_final);  			
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

	jumlahsbu ='';
   inputJumlahSBU(event:any){
     this.jumlahsbu = event.target.value;
   }

    inputSBU = [];
   jumlahSBU = [];
   pilihSBU(id){
   	 this.inputSBU.push(id);
   	 this.jumlahSBU.push(this.jumlahsbu);
   	 console.log(this.inputSBU, this.jumlahSBU);
   }

   postHspkSbu(){
   	this.hs.id = this.route.snapshot.params['id'];
   	this.hs.sbu = this.inputSBU;
    this.hs.sbu_jumlah = this.jumlahSBU;
    this.hs.postHspkSbu().subscribe((data) => {
  		console.log(data);
  	});
   }

}
