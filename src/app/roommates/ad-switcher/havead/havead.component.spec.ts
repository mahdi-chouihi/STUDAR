import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaveadComponent } from './havead.component';

describe('HaveadComponent', () => {
  let component: HaveadComponent;
  let fixture: ComponentFixture<HaveadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HaveadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HaveadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
