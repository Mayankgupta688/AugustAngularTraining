import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class AppService {

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
}