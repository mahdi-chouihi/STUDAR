import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'havead',
  standalone: true,
  imports: [],
  templateUrl: './havead.component.html',
  styleUrl: './havead.component.css'
})
export class HaveadComponent {
  adArray: any[] = [];
  userId = 2; // Replace with the desired user ID

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData(); // Call the get method on component initialization
  }

  getData() {
    const url = `http://127.0.0.1:8000/ads`; // Construct the URL with query parameter
    this.http.get<any[]>(url)
      .subscribe(response => {
        this.adArray = response; // Update the data array
      });
  }
}
