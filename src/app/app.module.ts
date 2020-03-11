import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import  { Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule} from 'ng2-charts';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbMenuModule,NbListModule,NbChatModule, NbLayoutModule,NbWindowModule,NbDialogModule,NbSidebarModule,NbSelectModule, NbAccordionModule,NbActionsModule,NbButtonModule,NbIconModule,NbBadgeModule,NbCardModule,NbInputModule,NbCheckboxModule,NbUserModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {NgxWebstorageModule} from 'ngx-webstorage'
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component';
import { UsulanComponent } from './usulan/usulan.component';
import { SbuComponent } from './sbu/sbu.component';
import { SshComponent } from './ssh/ssh.component';
import { HspkComponent } from './hspk/hspk.component';
import { AsbComponent } from './asb/asb.component';
import { SshCreateComponent } from './ssh-create/ssh-create.component';
import { SshViewComponent } from './ssh-view/ssh-view.component';
import { SshUpdateComponent } from './ssh-update/ssh-update.component';
import { LoginComponent } from './login/login.component';
import { SbuCreateComponent } from './sbu-create/sbu-create.component';
import { SbuUpdateComponent } from './sbu-update/sbu-update.component';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';
import { SuratUsulanComponent } from './surat-usulan/surat-usulan.component';
import { HspkDetailComponent } from './hspk-detail/hspk-detail.component';
import { HspkCreateComponent } from './hspk-create/hspk-create.component';
import { HspkUpdateComponent } from './hspk-update/hspk-update.component';
import { HspkSshComponent } from './hspk-ssh/hspk-ssh.component';
import { HspkSbuComponent } from './hspk-sbu/hspk-sbu.component';
import { AsbCreateComponent } from './asb-create/asb-create.component';
import { AsbDetailComponent } from './asb-detail/asb-detail.component';
import { AsbUpdateComponent } from './asb-update/asb-update.component';
import { AsbSshComponent } from './asb-ssh/asb-ssh.component';
import { AsbHspkComponent } from './asb-hspk/asb-hspk.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UsulanCreateComponent } from './usulan-create/usulan-create.component';
import { UsulanUpdateComponent } from './usulan-update/usulan-update.component';


const appRoutes: Routes = [
  {path:'usulan',component:UsulanComponent},
  {path:'usulan/create',component:UsulanCreateComponent},
  {path:'usulan/update/:id',component:UsulanUpdateComponent},
  {path:'sbu',component:SbuComponent},
  {path:'sbu/create',component:SbuCreateComponent},
  {path:'sbu/update/:kode',component:SbuUpdateComponent},
  {path:'ssh',component:SshComponent},
  {path:'ssh/create',component:SshCreateComponent},
  {path:'ssh/update/:kode',component:SshUpdateComponent},
  {path:'ssh/view',component:SshViewComponent},
  {path:'hspk',component:HspkComponent},
  {path:'hspk/detail/:id',component:HspkDetailComponent},
  {path:'hspk/create',component:HspkCreateComponent},
  {path:'hspk/update/:id',component:HspkUpdateComponent},
  {path:'hspk/ssh/:id',component:HspkSshComponent},
  {path:'hspk/sbu/:id',component:HspkSbuComponent},
  {path:'asb',component:AsbComponent},
  {path:'asb/create',component:AsbCreateComponent},
  {path:'asb/detail/:id',component:AsbDetailComponent},
  {path:'asb/update/:id',component:AsbUpdateComponent},
  {path:'asb/ssh/:id',component:AsbSshComponent},
  {path:'asb/hspk/:id',component:AsbHspkComponent},
  {path:'home',component:HomeComponent},
  {path:'',component:LoginComponent},
  {path:'profile/setting',component:ProfileSettingComponent},
  {path:'surat_usulan',component:SuratUsulanComponent},
  {path:'myprofile',component:MyprofileComponent},
  {path:'user/create',component:UserCreateComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsulanComponent,
    SbuComponent,
    SshComponent,
    HspkComponent,
    AsbComponent,
    SshCreateComponent,
    SshViewComponent,
    SshUpdateComponent,
    LoginComponent,
    SbuCreateComponent,
    SbuUpdateComponent,
    ProfileSettingComponent,
    SuratUsulanComponent,
    HspkDetailComponent,
    HspkCreateComponent,
    HspkUpdateComponent,
    HspkSshComponent,
    HspkSbuComponent,
    AsbCreateComponent,
    AsbDetailComponent,
    AsbUpdateComponent,
    AsbSshComponent,
    AsbHspkComponent,
    MyprofileComponent,
    UserCreateComponent,
    UsulanCreateComponent,
    UsulanUpdateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NgxWebstorageModule.forRoot(),
    NbMenuModule.forRoot(),
    NbWindowModule.forRoot(),
    NbDialogModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbActionsModule,
    NbAccordionModule,
    NbChatModule,
    NbListModule,
    NbSelectModule,
    NbButtonModule,
    NbIconModule,
    NbCardModule,
    NbUserModule,
    NbBadgeModule,
    NbInputModule,
    NbEvaIconsModule,
    NbCheckboxModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    RouterModule.forRoot(appRoutes,{onSameUrlNavigation: 'reload'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
