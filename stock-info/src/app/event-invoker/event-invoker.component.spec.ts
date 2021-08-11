import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventInvokerComponent } from './event-invoker.component';

describe('EventInvokerComponent', () => {
  let component: EventInvokerComponent;
  let fixture: ComponentFixture<EventInvokerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventInvokerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventInvokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
