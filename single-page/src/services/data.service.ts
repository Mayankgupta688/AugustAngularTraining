import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CanActivate, Resolve } from "@angular/router";

@Injectable({
    providedIn: "root"
})
export class DataService implements Resolve<any>, CanActivate {

    constructor(private _httpClient: HttpClient) {}
    
    resolve() {
        return this._httpClient.get("http://localhost:3000/employees");
    }

    canActivate() {
        return false;
    }
}