import { Component, OnInit,TemplateRef  } from '@angular/core';
import { SbuServiceService } from '../sbu-service.service';
import { NbDialogService } from '@nebular/theme';


@Component({
  selector: 'app-sbu',
  templateUrl: './sbu.component.html',
  styleUrls: ['./sbu.component.scss']
})
export class SbuComponent implements OnInit {

  constructor(public db:SbuServiceService,private dialogService: NbDialogService) { }

  datas = [];

  detaildatas=[];
  uangs = [];
  uang:string="";
  hasil:string="";



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

  hak :boolean = false;

  ngOnInit():void {

  	this.db.getTableSBU().subscribe((data) => {
  		this.datas = data;  		  		  		  		  	
  		for (var i = 0; i < data.length; ++i) {
  			this.uang = this.convertToRupiah(data[i].harga_final);
  			data[i].hargafinal = this.uang;
  		}
  	});

    if(localStorage.getItem('hak_akses') == "Penyusun" ){
      this.hak = true
    }
    

  }

  deleterSbu(dialog: TemplateRef<any>,kode) {
    this.dialogService.open(dialog, { context: kode});
  }

  DetailSbu(dialog: TemplateRef<any> , kode, hasScroll: boolean) {
    this.db.kode = kode;
    this.db.getDetailSBU().subscribe((data)=>{
      console.log(data);
      
      this.detaildatas = data;
      this.kode = data.kode;
      this.nama = data.nama;
      this.merk = data.merk;
      this.spek = data.spek;
      this.satuan = data.satuan;

      this.namaTokoS1 = data.nama_toko_survey1;
      this.merkS1 = data.merk_survey1;
       this.hargaS1= this.convertToRupiah(data.harga_survey1);
      this.KeteranganS1 = data.keterangan_survey1;

      
      //console.log(this.namaTokoS2);
      if(data.nama_toko_survey2 == null){
        this.namaTokoS2 = '-';
        this.merkS2 = '-';
        this.hargaS2 ='-';
        this.KeteranganS2 = '-';
      }
      else{
        this.namaTokoS2 = data.nama_toko_survey2;
        this.merkS2 = data.merk_survey2;
        this.hargaS2 = this.convertToRupiah(data.harga_survey2);
        this.KeteranganS2 = data.keterangan_survey2;
      }

      
      if(data.nama_toko_survey3 == null){
        this.namaTokoS3 = '-';
        this.merkS3 = '-';
        this.hargaS3 ='-';
        this.KeteranganS3 = '-';
      }
      else{
        this.namaTokoS3 = data.nama_toko_survey3;
         this.merkS3 = data.merk_survey3;
         this.hargaS3 = this.convertToRupiah(data.harga_survey3);
         this.KeteranganS3 = data.keterangan_survey3;
      }

      if(data.nama_toko_survey4 == null){
        this.namaTokoS4 = '-';
        this.merkS4 = '-';
        this.hargaS4 ='-';
        this.KeteranganS4 = '-';
      }
      else{
        this.namaTokoS4 = data.nama_toko_survey4;
        this.merkS4 = data.merk_survey4;
        this.hargaS4 = this.convertToRupiah(data.harga_survey4);
        this.KeteranganS4 = data.keterangan_survey4;
      }
         

       this.hargaFinal=this.convertToRupiah(data.harga_final);
       this.alasan = data.alasan;
      
      this.dialogService.open(dialog, { context: 'kode :'+kode +'<br> nama :'+data.nama});
    })
   
  }

  cari='';
  search(event:any) {
    this.cari = event.target.value;
    this.db.keyword = this.cari;
     this.db.Search().subscribe((data)=>{
      this.datas = data;                            
      for (var i = 0; i < data.length; ++i) {
        this.uang = this.convertToRupiah(data[i].harga_final);
        data[i].hargafinal = this.uang;
      }
    })
  }

   DeleteSbu(dialog: TemplateRef<any> ,kode){
     //console.log(kode);
    this.db.kode = kode;
    this.db.deleteSBU().subscribe((data)=>{
      this.ngOnInit();
      console.log(data);
    }, (error)=>{
        this.dialogService.open(dialog, { context: 'asd'});
      })
    
  }


  convertToRupiah(angka)
	{
		var rupiah = '';		
		var angkarev = angka.toString().split('').reverse().join('');
		for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
		return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('');
	}



}
