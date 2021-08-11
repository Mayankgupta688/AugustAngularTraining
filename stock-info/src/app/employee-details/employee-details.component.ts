
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  @Input() employeeDetails;
  @Input() userName;
  @Output() deleteEventEmitter = new EventEmitter<string>();
  constructor() { }

  notifyToDelete(employeeName) {
    alert("Deleting Employee with the name: " + employeeName);
    this.deleteEventEmitter.emit(employeeName);
  }

  ngOnInit(): void {
  }

}
