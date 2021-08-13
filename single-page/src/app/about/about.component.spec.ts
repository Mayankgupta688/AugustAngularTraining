import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('FooterComponentComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    })
    .compileComponents();
  });

  it('should render correct H1 Text', () => {
    var component = TestBed.createComponent(AboutComponent);
    var app = component.nativeElement;
    expect(app.getElementById("user_details").style.color).toBe("red");
  });

  it('should render correct H1 Text', () => {
    var component = TestBed.createComponent(AboutComponent);
    var app = component.componentInstance;
    expect(app.userName).toBe("Mayank Gupta");
    app.updateUserName();
    expect(app.userName).toBe("Anshul");
  });
});
