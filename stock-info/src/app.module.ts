import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app/appComponent/app.component";
import { AppComponentOther } from "./app/appOtherComponent/app.other.component";

@NgModule({
    declarations: [ AppComponent, AppComponentOther ],
    imports: [ BrowserModule ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }