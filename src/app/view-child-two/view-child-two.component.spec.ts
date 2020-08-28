import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildTwoComponent } from './view-child-two.component';

describe('ViewChildTwoComponent', () => {
  let component: ViewChildTwoComponent;
  let fixture: ComponentFixture<ViewChildTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChildTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
