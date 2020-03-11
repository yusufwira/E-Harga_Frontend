import { Component, OnInit, TemplateRef } from '@angular/core';
import { UsulanbaruServiceService } from '../usulanbaru-service.service';
import { NbDialogService } from '@nebular/theme';
import { NotifikasiServiceService } from '../notifikasi-service.service';

@Component({
  selector: 'app-usulan',
  templateUrl: './usulan.component.html',
  styleUrls: ['./usulan.component.scss']
})
export class UsulanComponent implements OnInit {

  constructor(public notif:NotifikasiServiceService,public usulan:UsulanbaruServiceService, private dialogService: NbDialogService) { }

  jumlahkat1="";
  jumlahkat2="";
  jumlahkat3="";
  data1 =[];
  data2=[];
  data3=[];
  datadetail=[];
  hak = localStorage.getItem('hak_akses');
  status=0;
   //hak = "localStorage.getItem('hak_akses');"

  ngOnInit() {
    console.log(localStorage.getItem('hak_akses'))
    if(localStorage.getItem('hak_akses')=='Penyusun'){
      console.log('data ini milik Penyusun');
       this.usulan.getTableUsulanPenyusun().subscribe((data) => {
         this.data1 = data[0];
         this.data2 = data[1];
         this.data3 = data[2];        
      });

       this.usulan.getCountUsulanPenyusun().subscribe((data) => {
         this.jumlahkat1 = data[0][0].count;
         this.jumlahkat2 = data[1][0].count;
         this.jumlahkat3 = data[2][0].count;
      });
    }
    else{
      console.log('data ini milik admin');
      this.usulan.getCountUsulan().subscribe((data) => {
         this.jumlahkat1 = data[0][0].count;
         this.jumlahkat2 = data[1][0].count;
         this.jumlahkat3 = data[2][0].count;
      });

    this.usulan.getTableUsulan().subscribe((data) => {
         this.data1 = data[0];
         this.data2 = data[1];
         this.data3 = data[2];
      });
    }
  }

  tipe='';
  nama ='';
  merk ='';
  spek='';
  satuan ='';
  harga ='';
  dinas ='';

  detailUsulan(dialog: TemplateRef<any>, id){
    this.usulan.getDetailUsulan(id).subscribe((data) => {
         console.log(data)
         this.tipe = data.tipe_usulan;
         this.nama = data.nama;
         this.merk = data.merk;
         this.spek = data.spek;
         this.satuan = data.satuan;
         this.harga = data.harga;
         this.dinas = data.dinas;
        
      });
  	 this.dialogService.open(dialog, { context: 'Maaf Username dan Password Salah' });
  }



  updateStatus(id,status,namausulan){
   

    if(status == 'Tolak'){
      if(localStorage.getItem('hak_akses') == "Admin OPD"){
        this.notif.isi = 'Data usulan yang bernama '+namausulan+' DITOLAK oleh Admin OPD'
      }
      else if(localStorage.getItem('hak_akses') == "Penyusun"){
        this.notif.isi = 'Data usulan yang bernama '+namausulan+' DITOLAK oleh Penyusun'
      }
      this.notif.tipe = "PENOLAKAN"
    }
    else{
      if(localStorage.getItem('hak_akses') == "Admin OPD"){
        this.notif.isi = 'Data usulan yang bernama '+namausulan+' Sudah Di Verfikasi oleh Admin OPD'
      }
      else if(localStorage.getItem('hak_akses') == "Penyusun"){
        this.notif.isi = 'Data usulan yang bernama '+namausulan+' Sudah Di Verfikasi oleh Penyusun'
      }
      this.notif.tipe = "VERIFIKASI"
    }
    this.notif.usulan_id = id;

    console.log(this.notif.isi)
    this.notif.postNotifikasi().subscribe((data) => {
         console.log(data)
     });

     this.usulan.updateStatus(id,status).subscribe((data) => {
         console.log(data)
         
         if(status == 'Tolak'){
           this.status = 2;
         }
         else{
           this.status = 1;
         }
         this.ngOnInit();
      });

  }

  delete(id){
    this.usulan.deleteUsulan(id).subscribe((data) => {
         console.log(data)
         this.ngOnInit();
      });
  }

}
