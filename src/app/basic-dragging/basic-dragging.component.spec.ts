import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDraggingComponent } from './basic-dragging.component';

describe('BasicDraggingComponent', () => {
  let component: BasicDraggingComponent;
  let fixture: ComponentFixture<BasicDraggingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicDraggingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicDraggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
