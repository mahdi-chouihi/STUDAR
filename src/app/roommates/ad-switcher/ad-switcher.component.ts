import { Component } from '@angular/core';
import { DonthaveadComponent } from './donthavead/donthavead.component';
import { HaveadComponent } from './havead/havead.component';
import { CommonModule } from '@angular/common';
import { DataService } from '../../data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ad-switcher',
  standalone: true,
  imports: [DonthaveadComponent,HaveadComponent,CommonModule],
  templateUrl: './ad-switcher.component.html',
  styleUrl: './ad-switcher.component.css'
})
export class AdSwitcherComponent {
  constructor(private dataService: DataService,private http: HttpClient) {}

  item =this.dataService.selectedHouse;
  showAd: boolean = true;

  toggleAd() {
    this.showAd = !this.showAd;
  }
}
