import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDocsComponent } from './my-docs.component';

describe('MyDocsComponent', () => {
  let component: MyDocsComponent;
  let fixture: ComponentFixture<MyDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
