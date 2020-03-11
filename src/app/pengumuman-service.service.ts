import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {of} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PengumumanServiceService {

  constructor(private http: HttpClient) { }

  pengumuman='';


  getPengumuman():Observable<any> {  	
  		return this.http.get("http://api-eharga.hamdiramadhan.com/pengumuman");
   }



  postPengumuman ():Observable<any> {
    let body = new HttpParams();
    body = body.set('pengumuman', this.pengumuman);
    
  		return this.http.post<any>
		("http://api-eharga.hamdiramadhan.com/update", body);
	}
}
