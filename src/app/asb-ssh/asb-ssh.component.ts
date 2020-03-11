import { Component, OnInit } from '@angular/core';
import { DatabaseServiceService } from '../database-service.service';
import { ActivatedRoute } from '@angular/router';
import { AsbServiceService } from '../asb-service.service';

@Component({
  selector: 'app-asb-ssh',
  templateUrl: './asb-ssh.component.html',
  styleUrls: ['./asb-ssh.component.scss']
})
export class AsbSshComponent implements OnInit {

  constructor(public db:DatabaseServiceService,public asb:AsbServiceService,public route:ActivatedRoute) { }

   datas = [];
  idparam =  this.route.snapshot.params['id'];

  ngOnInit() {
  	this.db.getTableSSh().subscribe((data) => {
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


   jumlahssh ='';
   inputJumlahSSH(event:any){
     this.jumlahssh = event.target.value;
   }

   inputSSH = [];
   jumlahSSH = [];
   pilihSSH(id){
   	 this.inputSSH.push(id);
   	 this.jumlahSSH.push(this.jumlahssh);
   	 console.log(this.inputSSH, this.jumlahSSH);
   }

   postAsbSsh(){
   	this.asb.id = this.route.snapshot.params['id'];
   	this.asb.shh = this.inputSSH;
   	this.asb.shh_jumlah = this.jumlahSSH;
   	this.asb.postAsbSsh().subscribe((data) => {
  		console.log(data);
  	});
   }

}
