import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent{

  userName = "Mayank Gupta";

  updateUserName() {
    this.userName = "Anshul";
  }

}
