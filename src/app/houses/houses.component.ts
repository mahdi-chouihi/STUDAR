import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { FormsComponent } from './forms/forms.component';

@Component({
  selector: 'app-houses',
  standalone: true,
  imports: [RouterLink,RouterOutlet,FormsComponent,RouterModule],
  templateUrl: './houses.component.html',
  styleUrl: './houses.component.css'
})
export class HousesComponent {

}
