import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app/appComponent/app.component";
import { AppComponentOther } from "./app/appOtherComponent/app.other.component";
import { ContentComponent } from "./app/mainApplication/contentComponent/content.component";
import { FooterComponent } from "./app/mainApplication/footerComponent/footer.component";
import { HeaderComponent } from "./app/mainApplication/headerComponent/header.component";
import { MainApplicationComponent } from "./app/mainApplication/mainApplication.component";
import { CounterAppComponent } from './app/counter-app/counter-app.component';
import { EmployeeListComponent } from './app/employee-list/employee-list.component';
import { ErrorRenderingComponent } from './app/error-rendering/error-rendering.component';
import { EmployeeDetailsComponent } from './app/employee-details/employee-details.component';
import { EmployeeCountComponent } from './app/employee-count/employee-count.component';
import { EventInvokerComponent } from './app/event-invoker/event-invoker.component';
import { EventCaptureComponent } from './app/event-capture/event-capture.component';
import { ListingEmployeeComponent } from './app/listing-employee/listing-employee.component';
import { TwowayBindingComponent } from './app/twoway-binding/twoway-binding.component';
import { ApplyDirectiveComponent } from './app/apply-directive/apply-directive.component';
import { DelayDirective } from "./directives/delay.directive";
import { TwowayChildBindingComponent } from "./app/twoway-binding/twoway-binding.component";
import { PipeImplementerComponent } from './app/pipe-implementer/pipe-implementer.component';
import { ReplacePipe } from "./pipes/replace.pipe";

@NgModule({
    declarations: [ 
        AppComponent, 
        AppComponentOther, 
        MainApplicationComponent,
        ContentComponent,
        FooterComponent,
        HeaderComponent,
        CounterAppComponent,
        EmployeeListComponent,
        ErrorRenderingComponent,
        EmployeeDetailsComponent,
        EmployeeCountComponent,
        EventInvokerComponent,
        EventCaptureComponent,
        ListingEmployeeComponent,
        TwowayBindingComponent,
        ApplyDirectiveComponent,
        DelayDirective,
        TwowayChildBindingComponent,
        PipeImplementerComponent,
        ReplacePipe
    ],
    imports: [ BrowserModule, HttpClientModule, FormsModule ],
    bootstrap: [ EmployeeListComponent ]
})
export class AppModule { }