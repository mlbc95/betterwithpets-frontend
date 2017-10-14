import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';

//Services
import { HttpService } from './services/http/http-service.service';
import { RegisterService } from './services/register/register.service';


const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule
  ],
  providers: [
    HttpService,
    RegisterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
