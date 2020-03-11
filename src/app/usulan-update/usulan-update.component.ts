import { Component, OnInit, TemplateRef } from '@angular/core';
import { UsulanbaruServiceService } from '../usulanbaru-service.service';
import { NbDialogService } from '@nebular/theme';
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router";
import { NotifikasiServiceService } from '../notifikasi-service.service';


@Component({
  selector: 'app-usulan-update',
  templateUrl: './usulan-update.component.html',
  styleUrls: ['./usulan-update.component.scss']
})
export class UsulanUpdateComponent implements OnInit {

  constructor(public notif:NotifikasiServiceService,public usulan:UsulanbaruServiceService,private router: Router, private dialogService: NbDialogService, public route:ActivatedRoute) { }

  id = this.route.snapshot.params['id'];
  tipe='';
  nama ='';
  merk ='';
  spek='';
  satuan ='';
  harga ='';
  dinas ='';

  ngOnInit() {
  	this.usulan.getDetailUsulan(this.id).subscribe((data) => {
         console.log(data)
         this.tipe = data.tipe_usulan;
         this.nama = data.nama;
         this.merk = data.merk;
         this.spek = data.spek;
         this.satuan = data.satuan;
         this.harga = data.harga;
         this.dinas = data.dinas;
      });
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
  inputHarga(event:any){
    this.harga = event.target.value;
  }

  action(dialog: TemplateRef<any>){
  	console.log(this.nama, this.merk, this.spek, this.satuan, this.harga);
  	this.usulan.id = this.id;
  	this.usulan.nama = this.nama;
  	this.usulan.spek = this.spek;
  	this.usulan.merk = this.merk;
  	this.usulan.satuan = this.satuan;
  	this.usulan.harga = this.harga;
    if(localStorage.getItem('hak_akses') == 'Penyusun'){
      this.usulan.edit = "*Telah diubah oleh Penyusun";
      this.notif.isi = "Data Usulan dengan nama "+this.nama+" Telah diubah oleh Penyusun";
      this.notif.tipe = "Perubahan Data";
      this.notif.usulan_id = this.id;
    }
    else if (localStorage.getItem('hak_akses') == 'Admin OPD'){
      this.usulan.edit = "*Telah diubah oleh Admin";
      this.notif.isi = "Data Usulan dengan nama "+this.nama+" Telah diubah oleh Admin OPD";
      this.notif.tipe = "Perubahan Data";
      this.notif.usulan_id = this.id;
    }

    // console.log(this.notif.tipe, this.notif.usulan_id);
    // console.log(this.notif.isi);


  	this.usulan.updateUsulan().subscribe((data) => {
         console.log(data)
         this.router.navigate(['/usulan'])
      },
      (error)=>{
        this.dialogService.open(dialog, { context: 'asd'});
      }
      );

    this.notif.postNotifikasi().subscribe((data) => {
         console.log(data)
       
      });

  }

  

}
