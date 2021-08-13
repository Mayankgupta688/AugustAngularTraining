import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  employees: any = [];
  constructor(private _httpClient: HttpClient, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.data.subscribe((response) => {
      this.employees = response.emp;
    })
  }

  deleteUser(empId: string) {
    this._httpClient.delete("http://localhost:3000/employees/" + empId).subscribe(() => {
      alert("Employee Deleted for the User")
      this._httpClient.get("http://localhost:3000/employees").subscribe((data) => {
        this.employees = data;
      })
    })
  }

  showDetails(empId: any) {
    this._router.navigate(["details", empId])
  }

}
