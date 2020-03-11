import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {of} from 'rxjs';
import { HttpClient,HttpHeaders, } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AsbServiceService {

  constructor(private http: HttpClient) { }


  	id='';
	kode ='';
	nama='';
	satuan='';
	tag='';
	harga='';

	shh=[];
	hspk =[];
   	shh_jumlah=[];
   	hspk_jumlah =[];

   	pilihanUpdate='';

   	getTableAsb():Observable<any> {  	
     var reqHeader = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
     });

  		return this.http.get("http://api-eharga.hamdiramadhan.com/asb",{ headers: reqHeader });
   }

   getDetailAsb():Observable<any> {
  	   var reqHeader = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
     });
  		return this.http.get("http://api-eharga.hamdiramadhan.com/asb/"+this.id,{ headers: reqHeader });
   }

   getCountAsb():Observable<any> {
     let body = new HttpParams();
      body = body.set('token',localStorage.getItem('token'))
      return this.http.post<any>
    ("http://api-eharga.hamdiramadhan.com/asb/count", body);     
   }

   postAsb():Observable<any> {
    let body = new HttpParams();
    body = body.set('kode', this.kode);
    body = body.set('nama', this.nama);
    body = body.set('satuan', this.satuan);
    body = body.set('tag', this.tag);
    body = body.set('pilihan', this.pilihanUpdate);
    
    this.shh.forEach((ssh_id:string)=>{
      body = body.append('ssh_id[]',ssh_id);
    })

    this.hspk.forEach((hspk_id:string)=>{
      body = body.append('hspk_id[]',hspk_id);
    })

    this.shh_jumlah.forEach((ssh_jumlah:string)=>{
      body = body.append('ssh_jumlah[]',ssh_jumlah);
    })

    this.hspk_jumlah.forEach((hspk_jumlah:string)=>{
      body = body.append('hspk_jumlah[]',hspk_jumlah);
    })
    
    body = body.set('token',localStorage.getItem('token'))      
      return this.http.post<any>
    ("http://api-eharga.hamdiramadhan.com/asb", body);        
	}

  postAsbSsh():Observable<any> {
    let body = new HttpParams();
    body = body.set('id',this.id);
    this.shh.forEach((ssh_id:string)=>{
      body = body.append('ssh_id[]',ssh_id);
    })
    this.shh_jumlah.forEach((ssh_jumlah:string)=>{
      body = body.append('ssh_jumlah[]',ssh_jumlah);
    })
     body = body.set('token',localStorage.getItem('token'))      
      return this.http.post<any>
    ("http://localhost/e-hargabackend/public/asb/ssh", body);
  }

   postAsbHspk():Observable<any> {
    let body = new HttpParams();
    body = body.set('id',this.id);
    this.hspk.forEach((hspk_id:string)=>{
      body = body.append('hspk_id[]',hspk_id);
    })
    this.hspk_jumlah.forEach((hspk_jumlah:string)=>{
      body = body.append('hspk_jumlah[]',hspk_jumlah);
    })
    
     body = body.set('token',localStorage.getItem('token'))      
      return this.http.post<any>
    ("http://api-eharga.hamdiramadhan.com/asb/hspk", body);
  }

  updateAsb():Observable<any> {
    let body = new HttpParams();
    body = body.set('id',this.id);
    body = body.set('kode', this.kode);
    body = body.set('nama', this.nama);
    body = body.set('satuan', this.satuan);
    body = body.set('tag', this.tag);
    body = body.set('pilihan', this.pilihanUpdate);
    
    this.shh.forEach((ssh_id:string)=>{
      body = body.append('ssh_id[]',ssh_id);
    })

     this.hspk.forEach((hspk_id:string)=>{
      body = body.append('hspk_id[]',hspk_id);
    })

     this.shh_jumlah.forEach((ssh_jumlah:string)=>{
      body = body.append('ssh_jumlah[]',ssh_jumlah);
    })

     this.hspk_jumlah.forEach((hspk_jumlah:string)=>{
      body = body.append('hspk_jumlah[]',hspk_jumlah);
    })
    
    body = body.set('token',localStorage.getItem('token'))      
      return this.http.post<any>
    ("http://api-eharga.hamdiramadhan.com/asb/update", body);
  }

	updateAsbHarga():Observable<any> {
    let body = new HttpParams();
    body = body.set('id',this.id);
    body = body.set('harga_total', this.harga);
    body = body.set('token',localStorage.getItem('token'))      
      return this.http.post<any>
    ("http://api-eharga.hamdiramadhan.com/asb/harga", body);
  }

   deleteAsb(id):Observable<any> {
    let body = new HttpParams();
    body = body.set('id', id);

    body = body.set('token',localStorage.getItem('token'))
      return this.http.post<any>
    ("http://api-eharga.hamdiramadhan.com/asb/delete", body);
  }

  keyword ='';
  Search():Observable<any> {
    let body = new HttpParams();
    body = body.set('keyword', this.keyword);
    body = body.set('token',localStorage.getItem('token'))
      return this.http.post<any>
    ("http://api-eharga.hamdiramadhan.com/asb/search", body);
  }
}
