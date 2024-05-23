import { Component } from '@angular/core';
import { HouseCardsComponent } from './house-cards/house-cards.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-own-houses',
  standalone: true,
  imports: [HouseCardsComponent,RouterLink,CommonModule,],
  templateUrl: './own-houses.component.html',
  styleUrl: './own-houses.component.css'
})
export class OwnHousesComponent {
  obj: any;
  items: any;
  constructor(private http: HttpClient,){}
  ngOnInit() {
    this.http.get<any[]>("http://127.0.0.1:8000/landlord/1").subscribe(data => {
      this.obj = data;
      this.items = this.obj; // No need to parse JSON again
    });
  }

}
