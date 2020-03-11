import { Component, OnInit } from '@angular/core';
import { PengumumanServiceService } from '../pengumuman-service.service';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { SbuServiceService } from '../sbu-service.service';
import { DatabaseServiceService } from '../database-service.service';
import { HspkServiceService } from '../hspk-service.service';
import { AsbServiceService } from '../asb-service.service';
import { UsulanServiceService } from '../usulan-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sshVerivy:number;
  sshTolak:number;
  sshProses:number;
  sshPending:number;

  sbuVerivy:number;
  sbuTolak:number;
  sbuProses:number;
  sbuPending:number;

  hspkVerivy:number;
  hspkTolak:number;
  hspkProses:number;
  hspkPending:number;

  asbVerivy:number;
  asbTolak:number;
  asbProses:number;
  asbPending:number;

  usulanVerivy:number;
  usulanTolak:number;
  usulanProses:number;
  usulanPending:number;


 
  public doughnutChartLabels: Label[] = ['Terverivikasi', 'Tertolak', 'Dalam Proses', 'Pending'];
  
  

  public hspkChartData: MultiDataSet = [
    [],

  ];

  public asbChartData: MultiDataSet = [
    [],

  ];
  public sshChartData: MultiDataSet = [
    [],

  ];

  public sbuChartData: MultiDataSet = [
    [],

  ];

  public usulanChartData: MultiDataSet = [
    [],

  ];
  public doughnutChartType: ChartType = 'doughnut';

  public chartColors: any[] = [
      { 
        backgroundColor:["#33FFBD", "#FF5733", "#33D4FF", "#FFBD33"] 
      }];


  constructor(public db:PengumumanServiceService,public sbu:SbuServiceService, public ssh:DatabaseServiceService, public hspk:HspkServiceService,public asb:AsbServiceService, public usulan:UsulanServiceService) { }
  pengumuman:string='';
  hak_akses = "";
  ngOnInit() {
   this.hak_akses = localStorage.getItem("hak_akses");

  	this.db.getPengumuman().subscribe((data) => {
  		this.pengumuman = data[0].pengumuman;  		  		  		  		  	  		
  	});

    this.sbu.getCountSBU().subscribe((data) => {     
      this.sbuVerivy = data[0][0].count;
      this.sbuTolak = data[1][0].count;
      this.sbuProses = data[2][0].count;
      this.sbuPending = data[3][0].count;            
      this.sbuChartData[0][0] = this.sbuVerivy;
      this.sbuChartData[0][1] = this.sbuTolak;
      this.sbuChartData[0][2] = this.sbuProses;
      this.sbuChartData[0][3] = this.sbuPending;                

    });

     this.ssh.getCountSSH().subscribe((data) => {     
      this.sshVerivy = data[0][0].count;
      this.sshTolak = data[1][0].count;
      this.sshProses = data[2][0].count;
      this.sshPending = data[3][0].count;            
      this.sshChartData[0][0] = this.sshVerivy;
      this.sshChartData[0][1] = this.sshTolak;
      this.sshChartData[0][2] = this.sshProses;
      this.sshChartData[0][3] = this.sshPending;                

    });

     this.hspk.getCountHspk().subscribe((data) => {     
      this.hspkVerivy = data[0][0].count;
      this.hspkTolak = data[1][0].count;
      this.hspkProses = data[2][0].count;
      this.hspkPending = data[3][0].count;            
      this.hspkChartData[0][0] = this.hspkVerivy;
      this.hspkChartData[0][1] = this.hspkTolak;
      this.hspkChartData[0][2] = this.hspkProses;
      this.hspkChartData[0][3] = this.hspkPending;                

    });

     this.asb.getCountAsb().subscribe((data) => {     
      this.asbVerivy = data[0][0].count;
      this.asbTolak = data[1][0].count;
      this.asbProses = data[2][0].count;
      this.asbPending = data[3][0].count;            
      this.asbChartData[0][0] = this.asbVerivy;
      this.asbChartData[0][1] = this.asbTolak;
      this.asbChartData[0][2] = this.asbProses;
      this.asbChartData[0][3] = this.asbPending;                
    });

     this.usulan.getjumlahusulan().subscribe((data) => {     
      
      this.usulanVerivy = data[0][0].count;
      this.usulanTolak = data[1][0].count;
      this.usulanProses = 0;
      this.usulanPending = data[2][0].count;            
      this.usulanChartData[0][0] = this.usulanVerivy;
      this.usulanChartData[0][1] = this.usulanTolak;
      this.usulanChartData[0][2] = this.usulanProses;
      this.usulanChartData[0][3] = this.usulanPending;                
    });
  }

  

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
