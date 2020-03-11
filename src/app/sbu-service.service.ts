import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {of} from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SbuServiceService {

  constructor(private http: HttpClient) { }

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

   getTableSBU():Observable<any> {  	
     var reqHeader = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
     });

  		return this.http.get("http://api-eharga.hamdiramadhan.com/sbu",{ headers: reqHeader });
   }

    getDetailSBU():Observable<any> {
  	  var reqHeader = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
     });

  		return this.http.get("http://api-eharga.hamdiramadhan.com/sbu/"+this.kode,{ headers: reqHeader });
   }

    getCountSBU():Observable<any> {
     let body = new HttpParams();
      body = body.set('token',localStorage.getItem('token'))
      return this.http.post<any>
    ("http://api-eharga.hamdiramadhan.com/sbu/count", body);     
   }


  postSBU (kode:string, nama:string):Observable<any> {
    let body = new HttpParams();
    body = body.set('kode', this.kode);
    body = body.set('nama', this.nama);
    body = body.set('merk', this.merk);
    body = body.set('spek', this.spek);
    body = body.set('satuan', this.satuan);
    body = body.set('tag', this.tag);

    body = body.set('namaTokoS1', this.namaTokoS1);
    body = body.set('merkS1', this.merkS1);
    body = body.set('hargaS1', this.hargaS1);
    body = body.set('keteranganS1', this.KeteranganS1);

    body = body.set('namaTokoS2', this.namaTokoS2);
    body = body.set('merkS2', this.merkS2);
    body = body.set('hargaS2', this.hargaS2);
    body = body.set('keteranganS2', this.KeteranganS2);

    body = body.set('namaTokoS3', this.namaTokoS3);
    body = body.set('merkS3', this.merkS3);
    body = body.set('hargaS3', this.hargaS3);
    body = body.set('keteranganS3', this.KeteranganS3);

    body = body.set('namaTokoS4', this.namaTokoS4);
    body = body.set('merkS4', this.merkS4);
    body = body.set('hargaS4', this.hargaS4);
    body = body.set('keteranganS4', this.KeteranganS4);

    body = body.set('hargaFinal', this.hargaFinal);
    body = body.set('alasan', this.alasan);
    body = body.set('token',localStorage.getItem('token'))
  		return this.http.post<any>
		("http://api-eharga.hamdiramadhan.com/sbu", body);
	}

  updateSBU ():Observable<any> {
    let body = new HttpParams();
    body = body.set('kode', this.kode);
    body = body.set('nama', this.nama);
    body = body.set('merk', this.merk);
    body = body.set('spek', this.spek);
    body = body.set('satuan', this.satuan);
    body = body.set('tag', this.tag);

    body = body.set('namaTokoS1', this.namaTokoS1);
    body = body.set('merkS1', this.merkS1);
    body = body.set('hargaS1', this.hargaS1);
    body = body.set('keteranganS1', this.KeteranganS1);

    body = body.set('namaTokoS2', this.namaTokoS2);
    body = body.set('merkS2', this.merkS2);
    body = body.set('hargaS2', this.hargaS2);
    body = body.set('keteranganS2', this.KeteranganS2);

    body = body.set('namaTokoS3', this.namaTokoS3);
    body = body.set('merkS3', this.merkS3);
    body = body.set('hargaS3', this.hargaS3);
    body = body.set('keteranganS3', this.KeteranganS3);

    body = body.set('namaTokoS4', this.namaTokoS4);
    body = body.set('merkS4', this.merkS4);
    body = body.set('hargaS4', this.hargaS4);
    body = body.set('keteranganS4', this.KeteranganS4);

    body = body.set('hargaFinal', this.hargaFinal);
    body = body.set('alasan', this.alasan);
    body = body.set('token',localStorage.getItem('token'))
      return this.http.post<any>
    ("http://api-eharga.hamdiramadhan.com/sbu/update", body);
  }


  deleteSBU():Observable<any> {
    let body = new HttpParams();
    body = body.set('kode', this.kode);
    console.log(this.kode);
    body = body.set('token',localStorage.getItem('token'))
      return this.http.post<any>
    ("http://api-eharga.hamdiramadhan.com/sbu/delete", body);
  }

  keyword ='';
  Search():Observable<any> {
    let body = new HttpParams();
    body = body.set('keyword', this.keyword);
    body = body.set('token',localStorage.getItem('token'))
      return this.http.post<any>
    ("http://api-eharga.hamdiramadhan.com/sbu/search", body);
  }
}
