import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonthaveadComponent } from './donthavead.component';

describe('DonthaveadComponent', () => {
  let component: DonthaveadComponent;
  let fixture: ComponentFixture<DonthaveadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonthaveadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonthaveadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});




