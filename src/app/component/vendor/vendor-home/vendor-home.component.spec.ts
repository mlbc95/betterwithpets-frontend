import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorHomeComponent } from './vendor-home.component';

describe('VendorHomeComponent', () => {
  let component: VendorHomeComponent;
  let fixture: ComponentFixture<VendorHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
