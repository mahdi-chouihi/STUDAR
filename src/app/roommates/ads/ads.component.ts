import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'ads',
  standalone: true,
  imports: [],
  templateUrl: './ads.component.html',
  styleUrl: './ads.component.css'
})
export class AdsComponent {
  constructor(private http: HttpClient,private dataService: DataService) {}
 
  @Input() item :any;

}
