import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/services/app.service';

@Component({
  selector: 'app-event-invoker',
  templateUrl: './event-invoker.component.html',
  styleUrls: ['./event-invoker.component.css']
})
export class EventInvokerComponent implements OnInit {

  userName = "Mayank Gupta";
  salary: number = 1000;
  constructor(private _dataService: AppService) { 
    setInterval(() => {
      this._dataService.eventNotifier.emit(
        `
          ${new Date().getHours()} : 
          ${new Date().getMinutes()} : 
          ${new Date().getSeconds()}
        `
      )
    }, 1000)

  }

  ngOnInit(): void {
  }

}
