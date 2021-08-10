import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  templateUrl: './counter-app.component.html',
  styleUrls: ['./counter-app.component.css']
})
export class CounterAppComponent {
  userName: string = "Mayank Gupta";
  imageUrl = "https://st3.depositphotos.com/1000975/17945/i/600/depositphotos_179453774-stock-photo-businessman-winning-best-employee-of.jpg";
  currentTime: string = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds}`;
  constructor() { 
    setInterval(() => {
      this.getLatestTime();
    }, 1000)
  }

  getLatestTime() {
    this.currentTime = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
  }

}
