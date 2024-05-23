import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsLandlordComponent } from './details-landlord.component';

describe('DetailsLandlordComponent', () => {
  let component: DetailsLandlordComponent;
  let fixture: ComponentFixture<DetailsLandlordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsLandlordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsLandlordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
