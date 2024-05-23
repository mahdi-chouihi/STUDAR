import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DataService } from '../../../../data.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details-landlord',
  standalone: true,
  imports: [MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatBadgeModule,
    MatSidenavModule,
    MatListModule,RouterLink,RouterOutlet,CommonModule],
  templateUrl: './details-landlord.component.html',
  styleUrl: './details-landlord.component.css'
})
export class DetailsLandlordComponent {
  constructor(private dataService: DataService,private http: HttpClient) {}

  item =this.dataService.selectedHouse;

  deleteHouse() {
    

    const url = `http://127.0.0.1:8000/house/${this.item.id_house}`; // Replace with actual endpoint

    this.http.delete(url).subscribe(() => {
      console.log('House deleted successfully!');
      // Optionally, update your local data if applicable (discussed later)
    }, error => {
      console.error('Error deleting house:', error);
      // Handle potential errors
    });
  }

  showDetails(item: any):void {
    this.dataService.selectedHouse = item;
        
  }
}
