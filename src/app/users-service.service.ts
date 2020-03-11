import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {of} from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor(private http: HttpClient) { }

   username ="";
   password ="";

   nip='';
   nama="";
   email="";
   no_telp="";
   unit_id='';
   dinas ='';
   hak_akses1='';
   hak=localStorage.getItem('hak_akses');

   login():Observable<any> {
    let body = new HttpParams();    
    body = body.set('username', this.username);
    body = body.set('password', this.password);
  		return this.http.post<any>
		("http://api-eharga.hamdiramadhan.com/api/login", body);
	 }


   logout():Observable<any> {
    let body = new HttpParams();    
    body = body.set('token', localStorage.getItem('token'));
      return this.http.post<any>
    ("http://api-eharga.hamdiramadhan.com/api/logout", body);
   }

   getUsers():Observable<any> {    
     var reqHeader = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
     });
     //console.log(localStorage.getItem('username'));
      return this.http.get("http://api-eharga.hamdiramadhan.com/user/"+localStorage.getItem('username'),{ headers: reqHeader });
   }

   getDetail():Observable<any> {    
    let body = new HttpParams();
    body = body.set('hak_akses', this.hak ); 
     body = body.set('dinas', localStorage.getItem('dinas') );
     console.log(localStorage.getItem('dinas'), this.hak)
    body = body.set('token',localStorage.getItem('token'))
      return this.http.post<any>
    ("http://api-eharga.hamdiramadhan.com/user/showdetail", body); 
   }

    updateInfoUser():Observable<any> {
    let body = new HttpParams();
    body = body.set('username', localStorage.getItem('username'));
    body = body.set('nama', this.nama);
    body = body.set('email',this.email);
    body = body.set('no_telp',this.no_telp);
    body = body.set('token',localStorage.getItem('token'))
      return this.http.post<any>
    ("http://api-eharga.hamdiramadhan.com/user/update", body);
  }

  AddUser():Observable<any> {
    let body = new HttpParams();
    body = body.set('username', this.username);
    body = body.set('password', this.password);
    body = body.set('nip', this.nip);
    body = body.set('nama', this.nama);
    body = body.set('email',this.email);
    body = body.set('no_telp',this.no_telp);
    body = body.set('unit_id', this.unit_id);
    body = body.set('dinas', this.dinas);
  
    body = body.set('hak_akses', this.hak_akses1);
    body = body.set('token',localStorage.getItem('token'))
      return this.http.post<any>
    ("http://api-eharga.hamdiramadhan.com/user", body);
  }

}
