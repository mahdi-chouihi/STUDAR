import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-house-cards',
  standalone: true,
  imports: [RouterLink,HttpClientModule,CommonModule],
  templateUrl: './house-cards.component.html',
  styleUrl: './house-cards.component.css'
})
export class HouseCardsComponent{
  
  obj: any;
  @Input() item :any;
 
  constructor(private http: HttpClient,private dataService: DataService) {}
  
  
  showDetails(item: any):void {
    this.dataService.selectedHouse = item;
        
  }
}
