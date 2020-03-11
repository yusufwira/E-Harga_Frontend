import { Component, OnInit } from '@angular/core';
import { DatabaseServiceService } from '../database-service.service';
import { HspkServiceService } from '../hspk-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hspk-ssh',
  templateUrl: './hspk-ssh.component.html',
  styleUrls: ['./hspk-ssh.component.scss']
})
export class HspkSshComponent implements OnInit {

  constructor(public db:DatabaseServiceService,public hs:HspkServiceService,public route:ActivatedRoute) { }
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

   postHspkSsh(){
   	this.hs.id = this.route.snapshot.params['id'];
   	this.hs.shh = this.inputSSH;
   	this.hs.shh_jumlah = this.jumlahSSH;
   	this.hs.postHspkSsh().subscribe((data) => {
  		console.log(data);
  	});
   }


}
