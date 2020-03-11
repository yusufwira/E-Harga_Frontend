import { Observable} from 'rxjs';
import {of} from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsulanbaruServiceService {

  constructor(private http: HttpClient) { }

  id = '';
  nama ='';
  merk ='';
  spek='';
  satuan ='';
  harga ='';
  edit ='';


   getTableUsulan():Observable<any> {  	
   		var reqHeader = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
     });
  	return this.http.get("http://api-eharga.hamdiramadhan.com/usulanbaru",{ headers: reqHeader });
   }

    getTableUsulanPenyusun():Observable<any> {    
       var reqHeader = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
     });
    return this.http.get("http://api-eharga.hamdiramadhan.com/usulanbarupenyusun",{ headers: reqHeader });
   }



   getDetailUsulan(id):Observable<any> {
  	  var reqHeader = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
     });

  	return this.http.get("http://api-eharga.hamdiramadhan.com/usulanbaru/"+id,{ headers: reqHeader });
   }


   postUsulan(detailUsulan):Observable<any> {
    const formData = new FormData();
    if(detailUsulan['fileUsulanbaru'] == null){
    	formData.append('detailUsulan', JSON.stringify(detailUsulan))
    	formData.append('detail', 'tidak')
    	formData.append('dinas', localStorage.getItem('dinas'))
    	formData.append('token', localStorage.getItem('token'))
    }
    else{
    	formData.append('file',detailUsulan['fileUsulanbaru'].item(0), detailUsulan['fileUsulanbaru'].item(0).name);
	    formData.append('fileLength', detailUsulan['fileUsulanbaru'].length);
	    formData.append('detailUsulan', JSON.stringify(detailUsulan))
	    formData.append('detail', 'ada')
	    formData.append('dinas', localStorage.getItem('dinas'))
	    formData.append('token', localStorage.getItem('token'))
    }
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    return this.http.post('http://api-eharga.hamdiramadhan.com/usulanbaru',formData, {
      headers: headers});
   }

   updateUsulan():Observable<any> {
    let body = new HttpParams();
    body = body.set('id', this.id);
    body = body.set('nama', this.nama);
    body = body.set('merk', this.merk);
    body = body.set('spek', this.spek);
    body = body.set('satuan', this.satuan);
    body = body.set('harga', this.harga);
    body = body.set('edit', this.edit);
    console.log(this.edit);
   
    body = body.set('token',localStorage.getItem('token'))
      return this.http.post<any>
    ("http://api-eharga.hamdiramadhan.com/usulanbaru/update", body);
  }

    updateStatus(id,status):Observable<any> {
    let body = new HttpParams();
    body = body.set('id', id);
    body = body.set('hak_akses', localStorage.getItem('hak_akses'));
    body = body.set('status', status);

    body = body.set('token',localStorage.getItem('token'))
      return this.http.post<any>
    ("http://api-eharga.hamdiramadhan.com/usulanbaru/updatestatus", body);
  }

   getCountUsulan():Observable<any> {
     let body = new HttpParams();
      body = body.set('token',localStorage.getItem('token'))
      return this.http.post<any>
    ("http://api-eharga.hamdiramadhan.com/usulanbaru/count", body);     
   }
   getCountUsulanPenyusun():Observable<any> {
     let body = new HttpParams();
      body = body.set('token',localStorage.getItem('token'))
      return this.http.post<any>
    ("http://api-eharga.hamdiramadhan.com/usulanbarupenyusun/count", body);     
   }

   deleteUsulan(id):Observable<any> {
    let body = new HttpParams();
    body = body.set('id', id);
    body = body.set('token',localStorage.getItem('token'))
      return this.http.post<any>
    ("http://api-eharga.hamdiramadhan.com/usulanbaru/delete", body);
  }
}
