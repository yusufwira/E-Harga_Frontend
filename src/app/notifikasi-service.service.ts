import { Observable} from 'rxjs';
import {of} from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotifikasiServiceService {

  constructor(private http: HttpClient) { }

  getnotifikasi():Observable<any> {
  	  var reqHeader = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
     });

  		return this.http.get("http://api-eharga.hamdiramadhan.com/public/notif",{ headers: reqHeader });
   }

   isi ='';
   tipe ='';
   usulan_id='';
   postNotifikasi ():Observable<any> {
    let body = new HttpParams();
    body = body.set('isi', this.isi);
    body = body.set('tipe', this.tipe);
    body = body.set('usulan_id', this.usulan_id);
    body = body.set('token',localStorage.getItem('token'))
  		return this.http.post<any>
		("http://api-eharga.hamdiramadhan.com/notif", body);
	}
}
