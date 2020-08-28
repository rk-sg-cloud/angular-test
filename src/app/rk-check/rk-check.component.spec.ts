import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RkCheckComponent } from './rk-check.component';

describe('RkCheckComponent', () => {
  let component: RkCheckComponent;
  let fixture: ComponentFixture<RkCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RkCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RkCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
