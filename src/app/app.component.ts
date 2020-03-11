import { ChangeDetectionStrategy,Component } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { UsersServiceService } from './users-service.service';
import { NotifikasiServiceService } from './notifikasi-service.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-harga';
  

  constructor(public notif:NotifikasiServiceService,public db:UsersServiceService,private sidebarService: NbSidebarService, private router: Router) {}

  // toggle() {
  //   this.sidebarService.toggle(true);
  //   return false;
  // }
  nama ='';
  hak_akses='';
  status ='';
  dinas='';
  cek = false;

  items = [
    {
      title: 'Profile',
      expanded: true,
      children: [
        {
          title: 'My Profile',
          link: ['myprofile'], // goes into angular `routerLink`
        },     
        
      ],
    },
    {
      title: 'Home',
      link: ['/home'],
    },
     {
      title: 'Usulan',
      link: ['/usulan'],
    },
    {
      title: 'Surat Usulan',
      link: ['/surat_usulan'],
    },
    {
      title: 'SBU',
      link: ['/sbu'],
    },
    {
      title: 'SSH',
      link: ['/ssh'],
    },
     {
      title: 'HSPK',
      link: ['/hspk'],
    },
     {
      title: 'ASB',
      link: ['/asb'],
    },
  ];

  base64image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAG1BMVEVEeef///+4zPaKq/ChvPPn7' +
    'vxymu3Q3flbieqI1HvuAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAQUlEQVQ4jWNgGAWjgP6ASdncAEaiAhaGiACmFhCJLsMaIiDAEQEi0WXYEiMC' +
    'OCJAJIY9KuYGTC0gknpuHwXDGwAA5fsIZw0iYWYAAAAASUVORK5CYII='


  toggle() {
    this.sidebarService.toggle(false, 'left');
    
    this.db.getUsers().subscribe((data) => {
      this.nama = data.nama
      this.hak_akses = data.hak_akses
      this.dinas = data.dinas
      localStorage.setItem('dinas',data.dinas)
      localStorage.setItem('hak_akses',this.hak_akses)
      localStorage.setItem('users_id',data.id)
      this.ngOnInit();
      //console.log(this.nama);
    });
  }

  datanotif = [];

  toggleCompact() {
    this.sidebarService.toggle(false, 'right');

    this.notif.getnotifikasi().subscribe((data) => {

     this.datanotif = data;
    });
  }

  admin = {
          title: 'Setting',
          link: ['/profile/setting'], // operator / admin duwe
        };



  ngOnInit() {

       
      console.log(this.cek)
       //localStorage.setItem('token','');
       this.status = localStorage.getItem('username');
       
       //this.ngOnInit()
       console.log(this.status);
       if(localStorage.getItem('hak_akses') == 'Admin OPD' || localStorage.getItem('hak_akses') == 'Penyusun'){
         if(this.cek == false){
           console.log('asdas');
           for (var i = 0; i < this.items.length; ++i) {
             if(this.items[i].title == 'Profile'){
               this.items[i].children.push(this.admin as any);
               this.cek = true;
               this.ngOnInit()
             }
           }
         }

       }
       else{
           //console.log('hahha')
           for (var i = 0; i < this.items.length; ++i) {
             if(this.items[i].title == 'Profile'){
               this.items[i].children.splice(3);
               this.cek = false;
                //console.log(this.items[i].children)
             }
           }
         }


       // var OneSignal = window['OneSignal'] || [];
       //  console.log("Init OneSignal");
       //  OneSignal.push(["init", {
       //    appId: "981a4654-db2f-4fe5-a95a-7f1a6070d538",
       //    autoRegister: false,
       //    allowLocalhostAsSecureOrigin: true,
       //    notifyButton: {
       //      enable: false
       //    }
       //  }]);
       //  console.log('OneSignal Initialized');
       //  OneSignal.push(function () {
       //    console.log('Register For Push');
       //    OneSignal.push(["registerForPushNotifications"])
       //  });
       //  OneSignal.push(function () {
       //    // Occurs when the user's subscription changes to a new value.
       //    OneSignal.on('subscriptionChange', function (isSubscribed) {
       //      console.log("The user's subscription state is now:", isSubscribed);
       //      OneSignal.getUserId().then(function (userId) {
       //        console.log("User ID is", userId);
       //      });
       //    });
       //  });
       //this.update();
  }

  Logout() {
       status ='';
       localStorage.clear();  
       this.ngOnInit()
       this.router.navigate(['/']);       
  } 







}
