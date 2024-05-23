import { Component, OnInit,Input } from '@angular/core';
import { DetailsAllComponent } from '../../details-all/details-all.component';
import { Router, RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DataService } from '../../data.service';


@Component({
  selector: 'house-card',
  standalone: true,
  imports: [DetailsAllComponent,RouterLink,HttpClientModule,CommonModule],
  templateUrl: './house-card.component.html',
   styleUrl: './house-card.component.css'
})
export class HouseCardComponent {
  
  constructor(private http: HttpClient,private router: Router,private dataService: DataService) {}
 
  @Input() item :any;

  showDetails(item: any):void {
    this.dataService.selectedHouse = item;
        
  }
  
  
    

  
  

 
}
