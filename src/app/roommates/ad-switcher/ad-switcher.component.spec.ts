import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdSwitcherComponent } from './ad-switcher.component';

describe('AdSwitcherComponent', () => {
  let component: AdSwitcherComponent;
  let fixture: ComponentFixture<AdSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdSwitcherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
