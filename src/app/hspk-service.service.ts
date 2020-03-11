import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {of} from 'rxjs';
import { HttpClient,HttpHeaders, } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HspkServiceService {

	id='';
	kode ='';
	nama='';
	satuan='';
	tag='';
  profit='';
  harga ='';
  page='';
  pageSize='';

  
	 shh=[];
	 sbu =[];
   shh_jumlah=[];
   sbu_jumlah =[];

  pilihanUpdate='';

  constructor(private http: HttpClient) { }

  getTableHspk():Observable<any> {  	
     var reqHeader = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
     });

  		return this.http.get("http://api-eharga.hamdiramadhan.com/hspk",{ headers: reqHeader });
   }

   getTableHspkLimit(page,pagesize):Observable<any> {    
    let body = new HttpParams();
    body = body.set('id',this.id);
    body = body.set('page',page);
    body = body.set('pageSize',pagesize);
   
     body = body.set('token',localStorage.getItem('token'))      
      return this.http.post<any>
    ("http://api-eharga.hamdiramadhan.com/hspk/limit", body);
   }

   getDetailHspk():Observable<any> {
  	   var reqHeader = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
     });
  		return this.http.get("http://api-eharga.hamdiramadhan.com/hspk/"+this.id,{ headers: reqHeader });
   }

   getCountHspk():Observable<any> {
     let body = new HttpParams();
      body = body.set('token',localStorage.getItem('token'))
      return this.http.post<any>
    ("http://api-eharga.hamdiramadhan.com/hspk/count", body);     
   }

  postHspk():Observable<any> {
    let body = new HttpParams();
    body = body.set('kode', this.kode);
    body = body.set('nama', this.nama);
    body = body.set('satuan', this.satuan);
    body = body.set('tag', this.tag);
    body = body.set('profit', this.profit);
    body = body.set('pilihan', this.pilihanUpdate);
    
    this.shh.forEach((ssh_id:string)=>{
      body = body.append('ssh_id[]',ssh_id);
    })

    this.sbu.forEach((sbu_id:string)=>{
      body = body.append('sbu_id[]',sbu_id);
    })

    this.shh_jumlah.forEach((ssh_jumlah:string)=>{
      body = body.append('ssh_jumlah[]',ssh_jumlah);
    })

    this.sbu_jumlah.forEach((sbu_jumlah:string)=>{
      body = body.append('sbu_jumlah[]',sbu_jumlah);
    })
    
    body = body.set('token',localStorage.getItem('token'))      
      return this.http.post<any>
    ("http://api-eharga.hamdiramadhan.com/hspk", body);        
	}

  postHspkSsh():Observable<any> {
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
    ("http://api-eharga.hamdiramadhan.com/hspk/ssh", body);
  }

  postHspkSbu():Observable<any> {
    let body = new HttpParams();
    body = body.set('id',this.id);
    this.sbu.forEach((sbu_id:string)=>{
      body = body.append('sbu_id[]',sbu_id);
    })
    this.sbu_jumlah.forEach((sbu_jumlah:string)=>{
      body = body.append('sbu_jumlah[]',sbu_jumlah);
    })
    
     body = body.set('token',localStorage.getItem('token'))      
      return this.http.post<any>
    ("http://api-eharga.hamdiramadhan.com/hspk/sbu", body);
  }

   updateHspk():Observable<any> {
    let body = new HttpParams();
    body = body.set('id',this.id);
    body = body.set('kode', this.kode);
    body = body.set('nama', this.nama);
    body = body.set('satuan', this.satuan);
    body = body.set('tag', this.tag);
    body = body.set('profit', this.profit);
    body = body.set('pilihan', this.pilihanUpdate);
    
    this.shh.forEach((ssh_id:string)=>{
      body = body.append('ssh_id[]',ssh_id);
    })

     this.sbu.forEach((sbu_id:string)=>{
      body = body.append('sbu_id[]',sbu_id);
    })

     this.shh_jumlah.forEach((ssh_jumlah:string)=>{
      body = body.append('ssh_jumlah[]',ssh_jumlah);
    })

     this.sbu_jumlah.forEach((sbu_jumlah:string)=>{
      body = body.append('sbu_jumlah[]',sbu_jumlah);
    })
    
    body = body.set('token',localStorage.getItem('token'))      
      return this.http.post<any>
    ("http://api-eharga.hamdiramadhan.com/hspk/update", body);
  }

  updateHspkHarga():Observable<any> {
    let body = new HttpParams();
    body = body.set('id',this.id);
    body = body.set('harga_total', this.harga);
    body = body.set('token',localStorage.getItem('token'))      
      return this.http.post<any>
    ("http://api-eharga.hamdiramadhan.com/hspk/harga", body);
  }



  deleteHspk(id):Observable<any> {
    let body = new HttpParams();
    body = body.set('id', id);

    body = body.set('token',localStorage.getItem('token'))
      return this.http.post<any>
    ("http://api-eharga.hamdiramadhan.com/hspk/delete", body);
  }

  keyword ='';
  Search():Observable<any> {
    let body = new HttpParams();
    body = body.set('keyword', this.keyword);
    body = body.set('token',localStorage.getItem('token'))
      return this.http.post<any>
    ("http://api-eharga.hamdiramadhan.com/hspk/search", body);
  }
}
