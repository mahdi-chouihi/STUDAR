import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnHousesComponent } from './own-houses.component';

describe('OwnHousesComponent', () => {
  let component: OwnHousesComponent;
  let fixture: ComponentFixture<OwnHousesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OwnHousesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OwnHousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
