import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApptsComponent } from './appts.component';

describe('ApptsComponent', () => {
  let component: ApptsComponent;
  let fixture: ComponentFixture<ApptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
