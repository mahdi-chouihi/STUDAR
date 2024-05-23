import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersADComponent } from './filters-ad.component';

describe('FiltersADComponent', () => {
  let component: FiltersADComponent;
  let fixture: ComponentFixture<FiltersADComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltersADComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiltersADComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
