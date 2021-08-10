import { Component } from "@angular/core";

@Component({
    templateUrl: "mainApplication.component.html",
    selector: "main-application",
    styleUrls: ["mainApplication.component.css"]
})
export class MainApplicationComponent {
    userName: string = "Meha Gupta";
    userAge: number = 10;
    userDesignation: string = "Developer"

    constructor() {
        setTimeout(() => {
            this.userName = "Anshul Gupta";
            this.userAge = 100;
        }, 10000)
    }
}