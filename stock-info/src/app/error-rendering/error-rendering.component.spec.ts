import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorRenderingComponent } from './error-rendering.component';

describe('ErrorRenderingComponent', () => {
  let component: ErrorRenderingComponent;
  let fixture: ComponentFixture<ErrorRenderingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorRenderingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorRenderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
