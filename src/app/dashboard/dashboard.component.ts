
import { Component, ElementRef, ViewChild, OnInit, ViewEncapsulation, ComponentFactoryResolver } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { DrawerItem, DrawerSelectEvent } from '@progress/kendo-angular-layout';
import { refDirective } from '../directives/ref.directive';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {

  @ViewChild('json') jsonElement?: ElementRef;
  @ViewChild(refDirective, { static: false }) refDir: refDirective
  public form: Object = { components: [] };

  constructor(private authService: AuthService, private resolver: ComponentFactoryResolver,private router: Router) { 

    this.items = this.mapItems(router.config);
    this.items[0].selected = true;
  }
  public selected = 'Notifications'; 
  

  public items: Array<DrawerItem> = [
    { text: 'Client Management', icon: 'k-i-inbox', selected: true },
    { separator: true },
    { text: 'Reports', icon: 'k-i-bell' },
    { text: 'Payment Handler', icon: 'k-i-calendar' },
    { separator: true },
    { text: 'Mail Templates', icon: 'k-i-hyperlink-email' },
    { text: 'Autobonus', icon: 'k-i-star-outline' },
    { text: 'Tournaments', icon: 'k-i-hyperlink-email' },
    { text: 'Daily Report', icon: 'k-i-star-outline' },
    { text: 'Retention', icon: 'k-i-hyperlink-email' },
    { text: 'Games', icon: 'k-i-star-outline' },
    { text: 'Operations', icon: 'k-i-hyperlink-email' },
    { text: 'Administration', icon: 'k-i-star-outline' },    
    { text: 'Logout', icon: 'k-i-star-outline' },
  ];

   onSelect(ev: DrawerSelectEvent): void {
     console.log(ev.item.path)
     console.log(this.authService.token)
     if( this.authService.token != null && this.authService.token != undefined){
      this.router.navigate([ ev.item.path ]);

      this.selected = ev.item.text;
     }




  }


public mapItems(routes: any[], path?: string): any[] {

  const singleRoute = routes.filter(item => {
  if (item.path === "crm"){
    return item._loadedConfig
  } 
});
console.log(singleRoute[0]._loadedConfig.routes[0])

    return singleRoute[0]._loadedConfig.routes[0].children.map(item => {
      
        return {
            text: item.text,
            icon: item.icon,
            path: item.path ? 'crm/'+item.path : ''
        };
    });
}


  async showR() {
   
  }


  onChange(event) {
    console.log(event.form);
  }

  ngAfterViewChecked(){
  
 
  }


  ngOnInit(): void {

  }


}
