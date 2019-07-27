import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropGroupsComponent } from './drop-groups.component';

describe('DropGroupsComponent', () => {
  let component: DropGroupsComponent;
  let fixture: ComponentFixture<DropGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
