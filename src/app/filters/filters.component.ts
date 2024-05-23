
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'filters',
  standalone: true,
  imports: [NgbModule,FormsModule,MatSliderModule,MatCheckboxModule,MatSelectModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  selectedUni: string | undefined;
  selectedCity: string | undefined ;
  selectedRoom: string | undefined ;
  selectedBed: string | undefined ;
  selectedGender: string | undefined ;
  selectedType: string | undefined ;
  min: number = 100; // Initializing min with a default value of 10
  max: number = 800; // Initializing max with a default value of 20
  wifiChecked: boolean = false;
  waterChecked: boolean = false;
  acChecked: boolean = false;
  furnishedChecked: boolean = false;
  availableNowChecked: boolean = false;
  fullyEmptyChecked: boolean = false;
}
