import { Component, OnInit,TemplateRef } from '@angular/core';
import { UsulanServiceService } from '../usulan-service.service';
import { NbDialogService } from '@nebular/theme';
import * as FileSaver from 'file-saver';
import {Router} from "@angular/router";


export interface detailUsulan {
  namaBerkas:string;
  users_id:string;
  fileUsulan:FileList
  opd: string;
}

@Component({
  selector: 'app-surat-usulan',
  templateUrl: './surat-usulan.component.html',
  styleUrls: ['./surat-usulan.component.scss']
})
export class SuratUsulanComponent implements OnInit {

  constructor(public db:UsulanServiceService,private dialogService: NbDialogService,private router: Router) { }

  kode="";
  nama="";
  dinas ="";
  spek ="";
  merk ="";
  satuan="";
  jumlah_berkas="";
  status="";

  datas = [];
  detaildata= [];


  detailUsulan: detailUsulan ={
    namaBerkas: "",
    users_id :"",
    fileUsulan:null,
    opd: "",
  }

  hak :boolean = false;
  penyusun :boolean = false;


  ngOnInit() {
  	this.db.getTableSuratUsulan().subscribe((data) => {
  		this.datas = data;  		  		  		  		  	  		
  	});

    this.detailUsulan.opd = localStorage.getItem('hak_akses');
    this.detailUsulan.users_id = localStorage.getItem('users_id');

    if(localStorage.getItem('hak_akses') == 'Admin OPD'){
      this.hak = true;
    }

    if(localStorage.getItem('hak_akses') == 'Penyusun'){
      this.hak = true;
    }

    this.db.getTableHasilSuratUsulan().subscribe((data) => {
      this.detaildata = data;  
      console.log(data)                                
    });
    //console.log(this.detailUsulan.users_id);
  }

  namaBerkas(event:any) {
    this.detailUsulan.namaBerkas = event.target.value;
  }

  handleFileDokumen(files: FileList) {
      //  this.detailPinjaman.fileTransaksi = files
      this.detailUsulan.fileUsulan = files;
  }

  action(dialog: TemplateRef<any>){
    //console.log(this.detailUsulan);
    this.db.postSuratUsulan(this.detailUsulan).subscribe((data) => {
       //console.log(data);     
        this.dialogService.open(dialog, { context: 'Data Berhasil Terupload' });   
        this.ngOnInit();            
    });
  }


  downloadFileUsulan(idusers,idSuratUsulan,namaFile)
  {
    var extension = namaFile.split(".")[1];
    var namaFile = namaFile.split(".")[0];
    //console.log(idusers,idSuratUsulan,namaFile,extension);
    this.db.downloadFileUsulan(idusers,idSuratUsulan,namaFile,extension).subscribe((data) => {
       console.log(data);   
       FileSaver.saveAs(data, namaFile);            
    });
    
  }


  verivikasi(idusulan,keterangan){

    this.db.updateSuratUsulan(idusulan,keterangan).subscribe((data) => {
       console.log(data);   
       this.ngOnInit();
    });
  }

}
