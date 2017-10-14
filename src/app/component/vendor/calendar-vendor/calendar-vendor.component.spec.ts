import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarVendorComponent } from './calendar-vendor.component';

describe('CalendarVendorComponent', () => {
  let component: CalendarVendorComponent;
  let fixture: ComponentFixture<CalendarVendorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarVendorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
