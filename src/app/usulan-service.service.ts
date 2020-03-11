import { Observable} from 'rxjs';
import {of} from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsulanServiceService {

  constructor(private http: HttpClient) { }

  kode="";
  nama="";
  dinas ="";
  spek ="";
  merk ="";
  satuan="";
  jumlah_berkas="";
  status="";
  

   getTableSuratUsulan():Observable<any> {  	
   		var reqHeader = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
     });
  	return this.http.get("http://api-eharga.hamdiramadhan.com/suratUsulan",{ headers: reqHeader });
   }

   getTableHasilSuratUsulan():Observable<any> {    
       var reqHeader = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
     });
    return this.http.get("http://api-eharga.hamdiramadhan.com/usersusulan?users_id="+localStorage.getItem('users_id'),{ headers: reqHeader });
   }

   getjumlahusulan():Observable<any> {
    let body = new HttpParams();
    
    body = body.set('token',localStorage.getItem('token'))
      return this.http.post<any>
    ("http://api-eharga.hamdiramadhan.com/usulan/jumlah", body);
  }

   postSuratUsulan(detailUsulan):Observable<any> {
    // let body = new HttpParams();
    const formData = new FormData();
    
    formData.append('file',detailUsulan['fileUsulan'].item(0), detailUsulan['fileUsulan'].item(0).name);
    formData.append('fileLength', detailUsulan['fileUsulan'].length);
    formData.append('detailUsulan', JSON.stringify(detailUsulan))
    formData.append('token', localStorage.getItem('token'))
    console.log(formData);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    return this.http.post('http://api-eharga.hamdiramadhan.com/usulan',formData, {
      headers: headers});
  }


   downloadFileUsulan(idusers,idsuratusulan, namaFile, extension):Observable<any> {
    // console.log(idTransaksi+" - " + namaFile + " - " + extension);
    // let params = new HttpParams();
    //    params = params.append('idTransaksi', '75');
    //    params = params.append('namaFile', 'haha');
    //    params = params.append('extension', 'xls');
    //console.log(namaFile);
    var reqHeader = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
     });
    return this.http
    .get('http://api-eharga.hamdiramadhan.com/downloadSuratUsulan?idusers='+idusers+'&idsuratusulan='+idsuratusulan+'&namaFile='+namaFile+'&ext='+extension,{responseType: "blob", headers: reqHeader});
  }


  updateSuratUsulan(idsuratusulan,keterangan):Observable<any> {
    let body = new HttpParams();
    console.log(keterangan);
    body = body.set('keterangan',keterangan);
    body = body.set('idsuratusulan',idsuratusulan);
    body = body.set('token',localStorage.getItem('token'))
      return this.http.post<any>
    ("http://api-eharga.hamdiramadhan.com/usulan/update", body);
  }
   
}
