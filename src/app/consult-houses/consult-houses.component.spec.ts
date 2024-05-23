import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultHousesComponent } from './consult-houses.component';

describe('ConsultHousesComponent', () => {
  let component: ConsultHousesComponent;
  let fixture: ComponentFixture<ConsultHousesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultHousesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultHousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
