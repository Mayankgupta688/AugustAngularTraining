import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/services/app.service';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent implements OnInit {
  employeeCount = 0;
  constructor(private _dataService: AppService) { 
    this.employeeCount = this._dataService.employeeListForApplication.length
  }

  ngOnInit(): void {
  }

}
