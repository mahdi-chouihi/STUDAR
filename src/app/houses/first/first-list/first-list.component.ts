import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsComponent } from '../../forms/forms.component';

@Component({
  selector: 'app-first-list',
  standalone: true,
  imports: [FormsComponent,RouterLink],
  templateUrl: './first-list.component.html',
  styleUrl: './first-list.component.css'
})
export class FirstListComponent {
  

}
