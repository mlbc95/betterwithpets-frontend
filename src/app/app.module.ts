import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import {FileUploadModule} from 'primeng/primeng';
import {SelectButtonModule} from 'primeng/primeng';
import {InputSwitchModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AgmCoreModule } from '@agm/core';
import { AddPetComponent } from './component/dashboard/mypets/add-pet/add-pet.component';

//Services
import { CalendarComponent } from './component/dashboard/calendar/calendar.component';
import { ParksComponent } from './component/dashboard/parks/parks.component';
import { ApptsComponent } from './component/dashboard/appts/appts.component';
import { LastSeenComponent } from './component/dashboard/last-seen/last-seen.component';
import { DashboardLayoutComponent } from '../layout/dashboard-layout/dashboard-layout.component';
import { MypetsComponent } from './component/dashboard/mypets/mypets.component';

//Shared
import { MapsModule } from './shared/maps/maps.module';
import { SidenavComponent } from './component/dashboard/sidenav/sidenav.component';
import { DefaultlayoutComponent } from '../layout/defaultlayout/defaultlayout.component';
import {NavbarComponent} from './component/navbar/navbar.component'


//Services
import { HttpService } from './services/http/http-service.service';

import {AuthService} from './services/auth/auth.service';
import { RegisterService } from './services/register/register.service';
import {DataListModule} from 'primeng/primeng';

const routes: Routes = [
  {
  path:'dashboard', component: DashboardLayoutComponent, children:[
    {
      path:'',
      component: DashboardComponent,
      children:[
        {
          path:'parks',
          component:ParksComponent
        },
        {
          path:'appts',
          component:ApptsComponent
        },
        {
          path:'my-pets',
          component:MypetsComponent
        },
        {
          path:'add-pet',
          component:AddPetComponent
        },
        {
          path:'last-seen',
          component: LastSeenComponent
        }
      ]
    }

  ]
},

{
  path:'',component:DefaultlayoutComponent,children:[

  { path: 'register', component: RegisterComponent },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent }
  ]
}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    CalendarComponent,
    ParksComponent,
    ApptsComponent,
    LastSeenComponent,
    DashboardLayoutComponent,
    MypetsComponent,
    NavbarComponent,
    MypetsComponent,
    AddPetComponent,
    SidenavComponent,
    DefaultlayoutComponent
  ],
  imports: [
    BrowserModule,
    DataListModule,
    SelectButtonModule,
    FileUploadModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule,
    MapsModule,
    InputSwitchModule,
    SelectButtonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCOjECnj7oHctNBjeC4S01nSlMQfMiM3sk'
    }
    )
  ],
  providers: [
    HttpService,
    RegisterService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
