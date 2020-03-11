import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
//import 'rxjs/add/observable/of';
import {of} from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseServiceService {

   constructor(private http: HttpClient) { }
  token="";
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

   getTableSSh():Observable<any> {
  	  var reqHeader = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
     });

  		return this.http.get("http://api-eharga.hamdiramadhan.com/ssh",{ headers: reqHeader });
   }

    getDetailSSh():Observable<any> {
  	   var reqHeader = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
     });
  		return this.http.get("http://api-eharga.hamdiramadhan.com/ssh/"+this.kode,{ headers: reqHeader });
   }

   getCountSSH():Observable<any> {
     let body = new HttpParams();
      body = body.set('token',localStorage.getItem('token'))
      return this.http.post<any>
    ("http://api-eharga.hamdiramadhan.com/ssh/count", body);     
   }


  postSSH (kode:string, nama:string):Observable<any> {
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
		("http://api-eharga.hamdiramadhan.com/ssh", body);
	}

  updateSSH ():Observable<any> {
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
    ("http://api-eharga.hamdiramadhan.com/ssh/update", body);
  }


  deleteSSH():Observable<any> {
    let body = new HttpParams();
    body = body.set('kode', this.kode);
    body = body.set('token',localStorage.getItem('token'))
      return this.http.post<any>
    ("http://api-eharga.hamdiramadhan.com/ssh/delete", body);
  }


  keyword ='';
  Search():Observable<any> {
    let body = new HttpParams();
    body = body.set('keyword', this.keyword);
    body = body.set('token',localStorage.getItem('token'))
      return this.http.post<any>
    ("http://api-eharga.hamdiramadhan.com/ssh/search", body);
  }

}
