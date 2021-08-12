import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyDirectiveComponent } from './apply-directive.component';

describe('ApplyDirectiveComponent', () => {
  let component: ApplyDirectiveComponent;
  let fixture: ComponentFixture<ApplyDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
