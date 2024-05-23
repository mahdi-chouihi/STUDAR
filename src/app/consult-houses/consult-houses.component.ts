import { Component } from '@angular/core';
import { FiltersComponent } from '../filters/filters.component';
import { HouseCardComponent } from './house-card/house-card.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consult-houses',
  standalone: true,
  imports: [FiltersComponent,HouseCardComponent,FormsModule,CommonModule],
  templateUrl: './consult-houses.component.html',
  styleUrl: './consult-houses.component.css'
})
export class ConsultHousesComponent {
  obj: any;
  items: any;
  dataService: any;
  constructor(private http: HttpClient,){}
  ngOnInit() {
    this.http.get<any[]>("http://127.0.0.1:8000/house").subscribe(data => {
      this.obj = data;
      this.items = this.obj; // No need to parse JSON again
    });
  }
  
}
