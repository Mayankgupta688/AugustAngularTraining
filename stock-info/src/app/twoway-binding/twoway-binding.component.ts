import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-twoway-binding',
  templateUrl: './twoway-binding.component.html',
  styleUrls: ['./twoway-binding.component.css']
})
export class TwowayBindingComponent {

  userName: string = "Mayank Gupta";

  getUserValue() {
    alert(this.userName)
  }

  setUserValue() {
    this.userName = "Aniket"
  }
}

@Component({
  selector: 'app-twoway-child-binding',
  template: `
    <h1>Data in Child Component received is: {{userNameChild}}</h1>
    <h2>Is this first Change: {{isFirstChange}}</h2>
  `
})
export class TwowayChildBindingComponent {
  @Input() userNameChild: any;

  isFirstChange: string = "This is First Time Data is rendered...";
  ngOnChanges(change: SimpleChange) {
    if(change['userNameChild'].firstChange == true) {
      this.isFirstChange = "This is First Time Data is rendered...";
    } else {
      this.isFirstChange = "This is Updated after first rendering data..."
    }
  }
}
