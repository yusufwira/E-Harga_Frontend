import { Component, OnInit, TemplateRef } from '@angular/core';
import { DatabaseServiceService } from '../database-service.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router";
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'app-ssh-update',
  templateUrl: './ssh-update.component.html',
  styleUrls: ['./ssh-update.component.scss']
})
export class SshUpdateComponent implements OnInit {

  constructor(public db:DatabaseServiceService,public route:ActivatedRoute,private router: Router,private dialogService: NbDialogService) { }
  survey1=0;
  survey2=0;
  survey3=0;
  survey4=0;
  hsurvey1:string="Rp.";
  hsurvey2:string="Rp.";
  hsurvey3:string="Rp.";
  hsurvey4:string="Rp.";
  hsurveyfinal:string="Rp.";
  hTerendah="";
  hTertinggi="";
  hRata=0;
  hRatarata="";

  kode="";
  nama = "";
  merk ="";
  spek ="";
  satuan ="";
  tag="";

  namaTokoS1 ="";
  merkS1 ="";
  hargaS1="";
  KeteranganS1="";

  namaTokoS2 ="";
  merkS2 ="";
  hargaS2="";
  KeteranganS2="";

  namaTokoS3 ="";
  merkS3 ="";
  hargaS3="";
  KeteranganS3="";

  namaTokoS4 ="";
  merkS4 ="";
  hargaS4="";
  KeteranganS4="";

  hargaFinal="";
  alasan ="";
  ngOnInit():void {
  	
  	this.kode = this.route.snapshot.params['kode'];
  	this.db.kode = this.kode;
  	this.db.getDetailSSh().subscribe((data)=>{
  		console.log(data);
  		this.nama = data.nama;
  		this.merk = data.merk;
  		this.spek = data.spek;
  		this.satuan = data.satuan;
  		this.tag = data.tag_pencarian;

  		this.namaTokoS1 = data.nama_toko_survey1;
  		this.merkS1 = data.merk_survey1;
  		this.hargaS1 = data.harga_survey1;
  		this.KeteranganS1 = data.keterangan_survey1;

  		this.namaTokoS2 = data.nama_toko_survey2;
  		this.merkS2 = data.merk_survey2;
  		this.hargaS2 = data.harga_survey2;
  		this.KeteranganS2 = data.keterangan_survey2;

  		this.namaTokoS3 = data.nama_toko_survey3;
  		this.merkS3 = data.merk_survey3;
  		this.hargaS3 = data.harga_survey3;
  		this.KeteranganS3 = data.keterangan_survey3;

  		this.namaTokoS4 = data.nama_toko_survey4;
  		this.merkS4 = data.merk_survey4;
  		this.hargaS4 = data.harga_survey4;
  		this.KeteranganS4 = data.keterangan_survey4;

  		 this.hargaFinal=data.harga_final;
  		 this.alasan = data.alasan;
  	})
  }

  convertSurvey1(event:any) {
	var survey1 = event.target.value;
  	this.hargaS1 =  event.target.value;
	this.survey1 =  event.target.value;
	this.hsurvey1 = this.convertToRupiah(survey1);
	this.calculate(this.survey1,this.survey2,this.survey3,this.survey4)
  }
  convertSurvey2(event:any) {
	var survey2 = event.target.value;
  	this.hargaS2 =  event.target.value;
	this.survey2 =  event.target.value;
	this.hsurvey2 = this.convertToRupiah(survey2);
	this.calculate(this.survey1,this.survey2,this.survey3,this.survey4)
  }
  convertSurvey3(event:any) {
	var survey3 = event.target.value;
  	this.hargaS3 =  event.target.value;
	this.survey3 =  event.target.value;
	this.hsurvey3 = this.convertToRupiah(survey3);
	this.calculate(this.survey1,this.survey2,this.survey3,this.survey4)
  }
  convertSurvey4(event:any) {
	var survey4 = event.target.value;
    this.hargaS4 =  event.target.value;
	this.survey4 =  event.target.value;
	this.hsurvey4 = this.convertToRupiah(survey4);
	this.calculate(this.survey1,this.survey2,this.survey3,this.survey4)
  }
  convertSurveyfinal(event:any) {
	var surveyfinal = event.target.value;
  this.hargaFinal =  event.target.value;
	this.hsurveyfinal = this.convertToRupiah(surveyfinal);	
  }


  calculate(s1,s2,s3,s4){
  	if(s3 == 0){
  		var numbers = [s1,s2];
  		var min = Math.min.apply(Math,numbers); 
  		var max = Math.max.apply(Math,numbers);
  		var a1 = parseInt(s1);
  		var a2 = parseInt(s2);
  		var rata =((a1+a2)/2) 
  			
  	}
  	else if(s4 == 0){
  		var numbers = [s1,s2,s3];
  		var min = Math.min.apply(Math,numbers);
  		var max = Math.max.apply(Math,numbers);
  		var a1 = parseInt(s1);
  		var a2 = parseInt(s2);
  		var a3 = parseInt(s3);
  		var rata =((a1+a2+a3)/3)
  		 
  	}
  	else{
  		var numbers = [s1,s2,s3,s4];
  		var min = Math.min.apply(Math,numbers);
  		var max = Math.max.apply(Math,numbers);
  		var a1 = parseInt(s1);
  		var a2 = parseInt(s2);
  		var a3 = parseInt(s3);
  		var a4 = parseInt(s4);
  		var rata =((a1+a2+a3+a4)/4)
  		  
  	}

  	this.hTerendah = this.convertToRupiah(min)
  	this.hTertinggi = this.convertToRupiah(max)
  	this.hRatarata = this.convertToRupiah(rata)
  
  	
  }

  in:boolean = false;
  inflansi(checked: boolean) {
  	if(this.in == false){
  		this.in = true;
  		console.log("true")	
  	}
  	else{
  		this.in = false;
  		console.log('false')	
  	}
  	
  }
  pp:boolean = false;
  ppn(checked: boolean) {
  	if(this.pp == false){
  		this.pp = true;
  		console.log("true")	
  	}
  	else{
  		this.pp = false;
  		console.log("false")	
  	}  
  }
  ke:boolean= false;
  keuntungan(checked: boolean) {
  	if(this.ke == false){
  		this.ke = true;
  		console.log("true")	
  	}
  	else{
  		this.ke = false;
  		console.log("false")	
  	}
  }


   convertToRupiah(angka)
	{
		var rupiah = '';		
		var angkarev = angka.toString().split('').reverse().join('');
		for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
		return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('');
	}

  ////////////////////////////////////////backend////////////////////////////////////////////////////////

	inputKode(event:any){
    this.kode = event.target.value;
  }
  inputNama(event:any){
    this.nama = event.target.value;
  }
  inputMerk(event:any){
    this.merk = event.target.value;
  }
  inputSpek(event:any){
    this.spek = event.target.value;
  }
  inputSatuan(event:any){
    this.satuan = event.target.value;
  }
  inputTag(event:any){
    this.tag = event.target.value;
  }

  inputNamaS1(event:any){
    this.namaTokoS1 = event.target.value;
  }
  inputMerkS1(event:any){
    this.merkS1 = event.target.value;
  }
  inputKeteranganS1(event:any){
    this.KeteranganS1 = event.target.value;
  }

  inputNamaS2(event:any){
    this.namaTokoS2 = event.target.value;
  }
  inputMerkS2(event:any){
    this.merkS2 = event.target.value;
  }
  inputKeteranganS2(event:any){
    this.KeteranganS2 = event.target.value;
  }

  inputNamaS3(event:any){
    this.namaTokoS3 = event.target.value;
  }
  inputMerkS3(event:any){
    this.merkS3 = event.target.value;
  }
  inputKeteranganS3(event:any){
    this.KeteranganS3 = event.target.value;
  }

  inputNamaS4(event:any){
    this.namaTokoS4 = event.target.value;
  }
  inputMerkS4(event:any){
    this.merkS4 = event.target.value;
  }
  inputKeteranganS4(event:any){
    this.KeteranganS4 = event.target.value;
  }

  inputAlasan(event:any){
    this.alasan = event.target.value;
  }
	
	action(dialog: TemplateRef<any>){
    this.db.kode = this.kode
    this.db.nama = this.nama
    this.db.merk = this.merk
    this.db.spek = this.spek
    this.db.satuan = this.satuan
    this.db.tag = this.tag

    this.db.namaTokoS1 = this.namaTokoS1
    this.db.merkS1 = this.merkS1
    this.db.hargaS1 = this.hargaS1
    this.db.KeteranganS1 = this.KeteranganS1

    this.db.namaTokoS2 = this.namaTokoS2
    this.db.merkS2 = this.merkS2
    this.db.hargaS2 = this.hargaS2
    this.db.KeteranganS2 = this.KeteranganS2

    this.db.namaTokoS3 = this.namaTokoS3
    this.db.merkS3 = this.merkS3
    this.db.hargaS3 = this.hargaS3
    this.db.KeteranganS3 = this.KeteranganS3

    this.db.namaTokoS4 = this.namaTokoS4
    this.db.merkS4 = this.merkS4
    this.db.hargaS4 = this.hargaS4
    this.db.KeteranganS4 = this.KeteranganS4

    this.db.hargaFinal = this.hargaFinal
    this.db.alasan = this.alasan


   

		this.db.updateSSH()
 		.subscribe((data) => {
  				console.log(data);
           this.router.navigate(['/ssh'])
  		},
       (error)=>{
        this.dialogService.open(dialog, { context: 'asd'});
      }
      );
	}




}
