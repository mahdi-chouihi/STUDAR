import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAllComponent } from './details-all.component';

describe('DetailsAllComponent', () => {
  let component: DetailsAllComponent;
  let fixture: ComponentFixture<DetailsAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
