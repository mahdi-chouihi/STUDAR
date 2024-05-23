import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstListComponent } from './first-list.component';

describe('FirstListComponent', () => {
  let component: FirstListComponent;
  let fixture: ComponentFixture<FirstListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
