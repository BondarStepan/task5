import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollDetailComponent } from './scroll-detail.component';

describe('ScrollDetailComponent', () => {
  let component: ScrollDetailComponent;
  let fixture: ComponentFixture<ScrollDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
