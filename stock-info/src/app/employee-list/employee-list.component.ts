import { Component } from '@angular/core';

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

  employeeList: any = [{
    name: "Mayank Gupta",
    info: "Working for TechnoFunnel",
    image: "https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/images/stock-photography/hr/usecase-marquee-hr.jpg"
  }, {
    name: "Anshul Gupta",
    info: "Working for TechnoFunnel",
    image: "https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/images/stock-photography/hr/usecase-marquee-hr.jpg"
  }, {
    name: "Ankit Gupta",
    info: "Working for TechnoFunnel",
    image: "https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/images/stock-photography/hr/usecase-marquee-hr.jpg"
  }, {
    name: "Meha Gupta",
    info: "Working for TechnoFunnel",
    image: "https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/images/stock-photography/hr/usecase-marquee-hr.jpg"
  }]

  deleteEmployee(empName: string) {
    this.employeeList = this.employeeList.filter((employee: any) => {
      return employee.name != empName;
    })
    alert("Deleting " + empName)
  }

  constructor() { 
    setTimeout(() => {
      this.textColor = "green";
    }, 5000)

    setTimeout(() => {
      this.textColor = "aqua";
    }, 10000)
  }

}
