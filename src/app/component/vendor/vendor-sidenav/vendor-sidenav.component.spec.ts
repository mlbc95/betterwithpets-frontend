import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorSidenavComponent } from './vendor-sidenav.component';

describe('VendorSidenavComponent', () => {
  let component: VendorSidenavComponent;
  let fixture: ComponentFixture<VendorSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
