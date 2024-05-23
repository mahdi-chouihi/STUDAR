import { CommonModule } from '@angular/common';
import { Component, ElementRef,ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOption, MatSelect } from '@angular/material/select';
import {Renderer2} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'donthavead',
  standalone: true,
  imports: [MatFormField,MatLabel,MatSelect,MatOption,FormsModule, MatFormFieldModule, MatInputModule,CommonModule],
  templateUrl: './donthavead.component.html',
  styleUrl: './donthavead.component.css'
})
export class DonthaveadComponent {
  adArray: any[] = [];
  studylevel: string = '';
  facebook: string = '';
  instagram: string = '';
  note: string = '';

  currentUserID = '';
  ngOnInit() {
    const modalElement = this.el.nativeElement.querySelector('#exampleModal2');
    this.renderer.appendChild(document.body, modalElement);
  }
  @ViewChild('myModal',{static:false}) exampleModal?:ElementRef
  close(){
    (this.exampleModal?.nativeElement as HTMLElement).style.display='none';
  }
 
  
  constructor(private renderer: Renderer2, private el: ElementRef,private http:HttpClient){}

  save() {
    const bodyData = {
    "user": 2,  // This should be the user's ID who is posting the ad
    "facebook": this.facebook,
    "instagram": this.instagram,
    "study_level": this.studylevel,
    "note": this.note  // Assuming you have a userID of 1 for simplicity
    };

    this.http.post<any>('http://127.0.0.1:8000/ads', bodyData)
  .subscribe({
    next: resultData => {
      console.log('Data saved successfully:', resultData);
      this.adArray.push(resultData);  // Optionally add the saved ad to the array
      alert('Ad Added Successfully!');
    },
    error: error => {
      console.error('Error saving ad:', error);
      alert('Failed to add ad. Please check the console for details.');
    }
  });

  }
  
}