import {CommonModule} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Component, NgModule, OnInit } from '@angular/core';
import { MainlayoutComponent } from '../shared/components/mainlayout/mainlayout.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ConstructorComponent } from '../constructor/constructor.component';
import { LoginComponent } from '../login/login.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

const routes = [
    {path:'',component:DashboardComponent, children:[
      {path:'ClientManagement',component:DashboardComponent, text: 'Client Management', icon: 'k-i-inbox'},
      {path:'Reports',component:ConstructorComponent, text: 'Reports', icon: 'k-i-bell'},
      {path:'', redirectTo:'/crm/ClientManagement',pathMatch:'full'},
      {path:'PaymentHandler',component:DashboardComponent, text: 'Payment Handler', icon: 'k-i-calendar'},
      {path:'MailTemplates',component:DashboardComponent, text: 'Mail Templates', icon: 'k-i-hyperlink-email'},
      {path:'Autobonus',component:DashboardComponent, text: 'Autobonus', icon: 'k-i-star-outline'},
      {path:'Tournaments',component:DashboardComponent, text: 'Tournaments', icon: 'k-i-hyperlink-email'},
      {path:'DailyReport',component:DashboardComponent, text: 'Daily Report', icon: 'k-i-star-outline'},
      {path:'Retention',component:DashboardComponent, text: 'Retention', icon: 'k-i-hyperlink-email'},
      {path:'Games',component:DashboardComponent, text: 'Games', icon: 'k-i-star-outline'},
      {path:'Operations',component:DashboardComponent, text: 'Operations', icon: 'k-i-hyperlink-email'},
     
    ]}

  ]

@NgModule({
    declarations:[
      DashboardComponent
    ],
  imports:[
    CommonModule,
    RouterModule.forChild(routes),
    LayoutModule,
    ButtonsModule
  ],
  exports:[
    RouterModule
  ]
})


export class MainModule { 

}


/* [
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
  ] */