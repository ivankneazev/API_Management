import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConstructorComponent } from './constructor/constructor.component';
import { LoginComponent } from './login/login.component';
import {MainModule} from './services/main.module'

/* const routes = [

  {path:'ClientManagement',component:DashboardComponent, text: 'Client Management', icon: 'k-i-inbox'},
  {path:'Reports',component:ConstructorComponent, text: 'Reports', icon: 'k-i-bell'},
  {path:'PaymentHandler',component:DashboardComponent, text: 'Payment Handler', icon: 'k-i-calendar'},
  {path:'MailTemplates',component:DashboardComponent, text: 'Mail Templates', icon: 'k-i-hyperlink-email'},
  {path:'Autobonus',component:DashboardComponent, text: 'Autobonus', icon: 'k-i-star-outline'},
  {path:'Tournaments',component:DashboardComponent, text: 'Tournaments', icon: 'k-i-hyperlink-email'},
  {path:'DailyReport',component:DashboardComponent, text: 'Daily Report', icon: 'k-i-star-outline'},
  {path:'Retention',component:DashboardComponent, text: 'Retention', icon: 'k-i-hyperlink-email'},
  {path:'Games',component:DashboardComponent, text: 'Games', icon: 'k-i-star-outline'},
  {path:'Operations',component:DashboardComponent, text: 'Operations', icon: 'k-i-hyperlink-email'},

  {path:'',component:LoginComponent},
  {path:'Administration',component:DashboardComponent, text: 'Administration', icon: 'k-i-star-outline'},  
  {path:'Logout',component:DashboardComponent, text: 'Logout', icon: 'k-i-star-outline'},
  {path:'login',component:LoginComponent},
  {path:'constructor',component:ConstructorComponent},
  { path: '**', redirectTo: '/' },
]; */


const routes:Routes = [
  
  {path:'crm', loadChildren:()=> MainModule},  
/*   {path:'cms',component:DashboardComponent,children:[
    {path:'Administration',component:DashboardComponent, text: 'Administration', icon: 'k-i-star-outline'},  
    {path:'constructor',component:ConstructorComponent},
  ]}, */
  {path:'',redirectTo:'/crm',pathMatch:'full'},
  /* {path:'Logout',component:DashboardComponent, text: 'Logout', icon: 'k-i-star-outline'}, */
  {path:'login',component:LoginComponent},
  { path: '**', redirectTo: '/crm' }, 
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
