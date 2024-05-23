import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBigComponent } from './form-big.component';

describe('FormBigComponent', () => {
  let component: FormBigComponent;
  let fixture: ComponentFixture<FormBigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormBigComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
