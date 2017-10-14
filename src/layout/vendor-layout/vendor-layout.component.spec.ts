import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorLayoutComponent } from './vendor-layout.component';

describe('VendorLayoutComponent', () => {
  let component: VendorLayoutComponent;
  let fixture: ComponentFixture<VendorLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
