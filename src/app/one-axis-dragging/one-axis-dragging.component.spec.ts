import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneAxisDraggingComponent } from './one-axis-dragging.component';

describe('OneAxisDraggingComponent', () => {
  let component: OneAxisDraggingComponent;
  let fixture: ComponentFixture<OneAxisDraggingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneAxisDraggingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneAxisDraggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
