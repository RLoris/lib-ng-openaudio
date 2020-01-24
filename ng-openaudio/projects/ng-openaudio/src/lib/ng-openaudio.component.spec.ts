import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOpenaudioComponent } from './ng-openaudio.component';

describe('NgOpenaudioComponent', () => {
  let component: NgOpenaudioComponent;
  let fixture: ComponentFixture<NgOpenaudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgOpenaudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgOpenaudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
