import { Component } from '@angular/core';
import { FiltersADComponent } from './filters-ad/filters-ad.component';
import { AdsComponent } from './ads/ads.component';
import { AdSwitcherComponent } from './ad-switcher/ad-switcher.component';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'roommates',
  standalone: true,
  imports: [FiltersADComponent,AdsComponent,AdSwitcherComponent,FormsModule,CommonModule,],
  templateUrl: './roommates.component.html',
  styleUrl: './roommates.component.css'
})
export class RoommatesComponent {
  obj: any;
  items: any;
  dataService: any;
  constructor(private http: HttpClient,){}
  ngOnInit() {
    this.http.get<any[]>("http://127.0.0.1:8000/ads").subscribe(data => {
      this.obj = data;
      this.items = this.obj; // No need to parse JSON again
    });
  }
  

}
