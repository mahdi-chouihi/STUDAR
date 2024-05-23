import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output, inject, input, output } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { NotifcardComponent } from './notifcard/notifcard.component';
import { DataService } from './data.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatBadgeModule,
    MatSidenavModule,
    MatListModule,CommonModule,MatMenuModule,NotifcardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  shouldRedirect: boolean = false;
  
 
  title = 'StuDar';
  roommates: boolean = true;
  home: boolean | undefined 
  el: any;
  renderer: any;
  obj: any;
  items: any;

  constructor(private http: HttpClient,private router: Router,private dataService: DataService) {}
  
  @Output() roommatesChange = new EventEmitter<boolean>();
  toggleRoommates(): void {
    this.roommates = !this.roommates;
  }
  
  ngOnInit() {
      this.router.events.subscribe(event => {
          if (event instanceof NavigationEnd && this.router.url === '/') {
              this.home = false;
          }
          else{
            this.home=true;
          }
      });
        
      
 

  
      
      
}
showDetails():void {
  this.http.get<any[]>("http://127.0.0.1:8000/ads").subscribe(data => {
          this.obj = data;
          this.items = this.obj; // No need to parse JSON again
        });
  this.dataService.ad = this.items[0];
      
}

redirectToAnotherPath() {
  if (this.shouldRedirect) {
    this.router.navigate(['list/F']); // Navigate to '/new-path'
  }
}
}
