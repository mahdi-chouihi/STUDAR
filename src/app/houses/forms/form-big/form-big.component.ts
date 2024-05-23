import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {Renderer2} from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { json } from 'stream/consumers';
// import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-form-big',
  standalone: true,
  imports:[RouterLink,CommonModule,FormsModule

  ],
  templateUrl: './form-big.component.html',
  styleUrl: './form-big.component.css'
})
export class FormBigComponent {
  isCheckedAC: boolean = false; // Variable to store the checkbox state
  a_c: number = 0; // Variable to store the value (1 if checked, 0 if not)
  
  updateValueAC() {
    this.a_c = 1;
  }
  isCheckedf: boolean = false; // Variable to store the checkbox state
  furnished: number = 0; // Variable to store the value (1 if checked, 0 if not)

  updateValuef() {
    this.furnished = 1;
  }
  
  isCheckedw: boolean = false; // Variable to store the checkbox state
  wifi: number = 0; // Variable to store the value (1 if checked, 0 if not)

  updateValuew() {
    this.wifi = 1;
  }

  isCheckede: boolean = false; // Variable to store the checkbox state
  waterelect: number = 0; // Variable to store the value (1 if checked, 0 if not)

  updateValuee() {
    this.waterelect = 1;
  }

  isCheckedb: boolean = false; // Variable to store the checkbox state
  balcony: number = 0; // Variable to store the value (1 if checked, 0 if not)

  updateValueb() {
    this.balcony = 1;
  }
 
  monthly_rent: number = 0;
  security_deposit: number = 0;
  bedrooms: number = 0;
  gender: string = '';
  date_available: Date | null = null;
  photo1: any;
  photo2: string = 'mah.jpg';
  photo3: string = 'mah.jpg';
  note: string = '';
  location: string = '';
  property:string='';
  university:string='';
  
  
  
constructor(private http: HttpClient )
{
  

  }


saveRecords() {

  const houseData = {
    
      "user": 1,
      "monthly_rent": this.monthly_rent,
      "security_deposit": this.security_deposit,
      "bedrooms": this.bedrooms,
      "gender": this.gender,
      "date_available": this.date_available,
      "photo1": "bed.png",
      "photo2": "house_photo2.jpg",
      "photo3": "house_photo3.jpg",
      "note": this.note,
      "location": this.location,
      "Property_Type": this.property,
      "university": this.university,
      "a_c": this.a_c,
      "furnished": this.furnished,
      "wifi": this.wifi,
      "balcony": this.balcony,
      "waterelect": this.waterelect
    
    
  };

  this.http.post<any>('http://127.0.0.1:8000/house', houseData)
  .subscribe({
    next: resultData => {
      console.log('Data saved successfully:', resultData);
    },
    error: error => {
      console.error('Error saving ad:', error);
    }
  });

  }

  }




