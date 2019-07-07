import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectedListsComponent } from './connected-lists.component';

describe('ConnectedListsComponent', () => {
  let component: ConnectedListsComponent;
  let fixture: ComponentFixture<ConnectedListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectedListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectedListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
