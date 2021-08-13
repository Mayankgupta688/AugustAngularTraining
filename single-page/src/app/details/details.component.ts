import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
export class DetailsComponent implements OnInit {
  employeeId: string = "";
  constructor(private _route: ActivatedRoute) { 
    this.employeeId = this._route.snapshot.params.id;
  }
  
  ngOnInit(): void {
  }

}
