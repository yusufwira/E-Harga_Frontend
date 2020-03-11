import { Component, OnInit , TemplateRef } from '@angular/core';
import { DatabaseServiceService } from '../database-service.service';
import { SbuServiceService } from '../sbu-service.service';
import { HspkServiceService } from '../hspk-service.service';
import { AsbServiceService } from '../asb-service.service';
import { UsulanbaruServiceService } from '../usulanbaru-service.service';
import {Router} from "@angular/router";
import { NbDialogService } from '@nebular/theme';

export interface detailUsulan {
  tipe:string;
  nama:string;
  merk:string;
  spek:string;
  satuan:string;
  harga:string;
  refrensi:string;
  fileUsulanbaru:FileList;
  kategori:string;
}

@Component({
  selector: 'app-usulan-create',
  templateUrl: './usulan-create.component.html',
  styleUrls: ['./usulan-create.component.scss']
})
export class UsulanCreateComponent implements OnInit {

  constructor(public ssh:DatabaseServiceService,private router: Router,public sbu:SbuServiceService, public hspk:HspkServiceService, public asb:AsbServiceService, public usulan:UsulanbaruServiceService, private dialogService: NbDialogService) { }

  tipeValue:string;
  namaValue:string;
  satuanValue :string;

  ngOnInit() {

  }

  datas =[];
  datasatuan =[];

  selectedNama(tipe){
  	if(tipe == "SSH"){
  		this.datas =[];
  		this.ssh.getTableSSh().subscribe((data) => {
  			this.datas = data;
  		});
  	}
  	else if(tipe == "SBU"){
  		this.datas =[];
  		this.sbu.getTableSBU().subscribe((data) => {
  			this.datas = data;
  		});
  	}
  	else if(tipe == "HSPK"){
  		this.datas =[];
  		this.hspk.getTableHspk().subscribe((data) => {
  			this.datas = data;
  		});
  	}
  	else if(tipe == "ASB"){
  		this.datas =[];
  		this.asb.getTableAsb().subscribe((data) => {
  			this.datas = data;
  		});
  	}
  }

   selectedTipe(tipe){
  	if(tipe == "SSH"){
  		this.datasatuan = ['Kg','L','G','M2','M3']
  	}
  	else if(tipe == "SBU"){
  		this.datasatuan = ['OB','OH']
  	}
  	else if(tipe == "HSPK"){
  		
  	}
  	else if(tipe == "ASB"){
  		
  	}
  }

  detailUsulanBaru: detailUsulan ={
    tipe :'',
    nama :'',
    merk :'',
    spek :'',
    satuan:'',
    harga:'',
    refrensi:'',
    fileUsulanbaru:null,
    kategori:'',
  }


 inputNama(event:any){
  	this.detailUsulanBaru.nama = event.target.value;
  }

 inputMerk(event:any){
  	this.detailUsulanBaru.merk = event.target.value;
 }

 inputSpek(event:any){
  	this.detailUsulanBaru.spek = event.target.value;
 }

 inputSatuan(event:any){
  	this.detailUsulanBaru.satuan = event.target.value;
  }

  inputRefrensi(event:any){
  	this.detailUsulanBaru.refrensi = event.target.value;
  }

  handleFileDokumen(files: FileList) {
      this.detailUsulanBaru.fileUsulanbaru = files;
  }

  hargas='Rp.';

  inputHarga(event:any){
  	var harga = event.target.value;
  	this.hargas = this.convertToRupiah(harga);
  	//console.log(this.hargas);
  	this.detailUsulanBaru.harga = harga;
  }



  convertToRupiah(angka)
	{
		var rupiah = '';		
		var angkarev = angka.toString().split('').reverse().join('');
		for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
		return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('');
	}

  action(dialog: TemplateRef<any>){
  	this.detailUsulanBaru.kategori = '3';
  	this.detailUsulanBaru.tipe = this.tipeValue;


  	//console.log(this.namaValue)
  	
  	if(this.satuanValue !='Belum'){
  		this.detailUsulanBaru.satuan = this.satuanValue;
  	}
  	else{
  		this.detailUsulanBaru.kategori = '2'
  	}

  	if(this.namaValue != 'Belum'){
  		this.detailUsulanBaru.nama = this.namaValue;
  	}
  	else{
  		this.detailUsulanBaru.kategori = '1';
  	}

  	 this.usulan.postUsulan(this.detailUsulanBaru).subscribe((data) => {
  			console.log(data);
        this.router.navigate(['/usulan']);
  		},(error)=>{
        this.dialogService.open(dialog, { context: 'asd'});
      });
  }

}
