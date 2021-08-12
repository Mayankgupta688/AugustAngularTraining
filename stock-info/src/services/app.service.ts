import { HttpClient } from "@angular/common/http";
import { Injectable, EventEmitter } from "@angular/core";
import { Observable } from "rxjs"

@Injectable({
    providedIn: "root"
})
export class AppService {

    constructor(private _httpClient: HttpClient) {
        debugger;
    }

    eventNotifier = new EventEmitter();

    employeeListForApplication = [{
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
    }];

    stockData() {
        var ideaObservable = Observable.create((observer) => {
            setInterval(() => {
                this._httpClient.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/IC8").subscribe((response: any) => {
                    observer.next(response.data.pricecurrent)
                })
            }, 5000)
        })

        return ideaObservable;
    }
}