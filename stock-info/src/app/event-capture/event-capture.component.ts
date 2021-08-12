import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/services/app.service';

@Component({
  selector: 'app-event-capture',
  templateUrl: './event-capture.component.html',
  styleUrls: ['./event-capture.component.css']
})
export class EventCaptureComponent implements OnInit {
  currentTime: string = "";
  constructor(private _dataService: AppService) { 
    
    this._dataService.eventNotifier.subscribe(
      (currentTimeFromEvent) => {
      this.currentTime = currentTimeFromEvent;
      }
    )
  }

  ngOnInit(): void {
  }

}
