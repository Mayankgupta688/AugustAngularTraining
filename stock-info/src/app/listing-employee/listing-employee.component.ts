import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AppService } from 'src/services/app.service';

@Component({
  selector: 'app-listing-employee',
  templateUrl: './listing-employee.component.html',
  styleUrls: ['./listing-employee.component.css']
})
export class ListingEmployeeComponent implements OnInit {

  sbiStockPrice = "400";
  ideaStockPrice = "6.60";
  dataSubscription: Subscription;
  constructor(private _appService: AppService) { }

  ngOnInit(): void {
    this.dataSubscription = this._appService.stockData().subscribe((price) => {
      this.ideaStockPrice = price;
    })
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }

}
