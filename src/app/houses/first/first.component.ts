import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsComponent } from '../forms/forms.component';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [RouterOutlet,FormsComponent],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {

}
