import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app/appComponent/app.component";
import { AppComponentOther } from "./app/appOtherComponent/app.other.component";
import { ContentComponent } from "./app/mainApplication/contentComponent/content.component";
import { FooterComponent } from "./app/mainApplication/footerComponent/footer.component";
import { HeaderComponent } from "./app/mainApplication/headerComponent/header.component";
import { MainApplicationComponent } from "./app/mainApplication/mainApplication.component";
import { CounterAppComponent } from './app/counter-app/counter-app.component';
import { EmployeeListComponent } from './app/employee-list/employee-list.component';

@NgModule({
    declarations: [ 
        AppComponent, 
        AppComponentOther, 
        MainApplicationComponent,
        ContentComponent,
        FooterComponent,
        HeaderComponent,
        CounterAppComponent,
        EmployeeListComponent
    ],
    imports: [ BrowserModule ],
    bootstrap: [ EmployeeListComponent ]
})
export class AppModule { }