import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'filters-ad',
  standalone: true,
  imports: [NgbModule,FormsModule,MatSliderModule,MatCheckboxModule,MatSelectModule],
  templateUrl: './filters-ad.component.html',
  styleUrl: './filters-ad.component.css'
})
export class FiltersADComponent {
  selectedUni: string | undefined;
  selectedCity: string | undefined ;
  selectedLvl: string | undefined ;
  selectedGender: string | undefined ;

}
