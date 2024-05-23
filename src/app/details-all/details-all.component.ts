import { Component, ElementRef, ViewChild } from '@angular/core';
import { FiltersComponent } from '../filters/filters.component';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {Renderer2, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-details-all',
  standalone: true,
  imports: [FiltersComponent,MatInputModule,
    MatFormField,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatBadgeModule,
    MatSidenavModule,
    MatListModule,
    CommonModule, FormsModule,
  ],
  templateUrl: './details-all.component.html',
  styleUrl: './details-all.component.css'
})
export class DetailsAllComponent {
  jsonData: any;
  reqArray: any;
  constructor(private renderer: Renderer2, private el: ElementRef,private dataService: DataService,private http: HttpClient) {}
  
  @ViewChild('myModal',{static:false}) exampleModal?:ElementRef
  close(){
    (this.exampleModal?.nativeElement as HTMLElement).style.display='none';
  }
  obj: any;
  item =this.dataService.selectedHouse;
  ngOnInit() {
    const modalElement = this.el.nativeElement.querySelector('#exampleModal');
    this.renderer.appendChild(document.body, modalElement);
    
  
  
  
  }
  note: string = '';
  date: string = '';
  status: string = '';
  saveRecords() {

    const houseData = {
      
        "user": 1,
        "note": this.note,
        "date": this.date,
        "status": "waiting",     
      
    };
    alert( JSON.stringify(houseData))
  
    this.http.post<any>('http://127.0.0.1:8000/request', houseData)
  .subscribe({
    next: resultData => {
      console.log('Data saved successfully:', resultData);
      this.reqArray.push(resultData);  // Optionally add the saved ad to the array
      alert('Ad Added Successfully!');
    },
    error: error => {
      console.error('Error saving ad:', error);
      alert('Failed to add ad. Please check the console for details.');
    }
  });


  }
}