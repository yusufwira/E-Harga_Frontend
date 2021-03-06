import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
//import 'rxjs/add/observable/of';
import {of} from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OperatoropdServiceService {

  constructor(private http: HttpClient) { }

  id='';
  username='';
  password='';
  NIP = '';
  keterangan='';
  email='';
  no_telp='';
  unit_id='';
  dinas='';

   getTableOperatorOpd():Observable<any> {
  	  var reqHeader = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
     });

  		return this.http.get("http://api-eharga.hamdiramadhan.com/operatoropd",{ headers: reqHeader });
   }

   getDetailOperatorOpd():Observable<any> {
  	   var reqHeader = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
     });
  		return this.http.get("http://api-eharga.hamdiramadhan.com/operatoropd/"+this.id,{ headers: reqHeader });
   }

   postOperatorOpd ():Observable<any> {
    let body = new HttpParams();
    body = body.set('id', this.id);
    body = body.set('username', this.username);
    body = body.set('password', this.password);
    body = body.set('NIP', this.NIP);
    body = body.set('keterangan', this.keterangan);
    body = body.set('email', this.email);
    body = body.set('no_telp', this.no_telp);
    body = body.set('unit_id', this.unit_id);
    body = body.set('dinas', this.dinas);
    body = body.set('token',localStorage.getItem('token'))
  		return this.http.post<any>
		("http://api-eharga.hamdiramadhan.com/operatoropd", body);
	}

	updateOperatorOpd ():Observable<any> {
    let body = new HttpParams();
    body = body.set('id', this.id);
    body = body.set('username', this.username);
    body = body.set('password', this.password);
    body = body.set('NIP', this.NIP);
    body = body.set('keterangan', this.keterangan);
    body = body.set('email', this.email);
    body = body.set('no_telp', this.no_telp);
    body = body.set('unit_id', this.unit_id);
    body = body.set('dinas', this.dinas);
    body = body.set('token',localStorage.getItem('token'))
  		return this.http.post<any>
		("http://api-eharga.hamdiramadhan.com/operatoropd/update", body);
	}

	deleteOperatorOpd():Observable<any> {
    let body = new HttpParams();
    body = body.set('id', this.id);
    body = body.set('token',localStorage.getItem('token'))
      return this.http.post<any>
    ("http://api-eharga.hamdiramadhan.com/operatoropd/delete", body);
  }
}
