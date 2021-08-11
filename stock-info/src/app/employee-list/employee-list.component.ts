import { Component, EventEmitter } from '@angular/core';
import { AppService } from 'src/services/app.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employeeListCount: number = 11;
  textColor: string = "red";
  applyClassName = "sample-class";
  isSpecial = false;
  userName = "Mayank";
  employeeList: any = [];

  constructor(private _dataService: AppService) { 
    setTimeout(() => {
      this.textColor = "green";
    }, 5000)

    setTimeout(() => {
      this.textColor = "aqua";
    }, 10000);

    this.employeeList = this._dataService.employeeListForApplication;
  }

  deleteEmployee(empName: string) {
    this.employeeList = this.employeeList.filter((employee: any) => {
      return employee.name != empName;
    })
    alert("Deleting " + empName)
  }

}
