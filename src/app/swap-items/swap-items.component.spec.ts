import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapItemsComponent } from './swap-items.component';

describe('SwapItemsComponent', () => {
  let component: SwapItemsComponent;
  let fixture: ComponentFixture<SwapItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
