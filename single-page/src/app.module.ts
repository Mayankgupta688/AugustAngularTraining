
import { NgModule } from "@angular/core";
import { BrowserModule} from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SinglePageComponent } from "./app/single-page/single-page.component";
import { HeaderComponentComponent } from './app/header-component/header-component.component';
import { FooterComponentComponent } from './app/footer-component/footer-component.component';
import { ContentComponentComponent } from './app/content-component/content-component.component';
import { AboutComponent } from './app/about/about.component';
import { HomeComponent } from './app/home/home.component';
import { RouterModule } from "@angular/router";
import { DetailsComponent } from './app/details/details.component';
import { DataService } from "./services/data.service";
import { TestingComponent } from "./app/testing/testing.component";

@NgModule({
    declarations: [
      HeaderComponentComponent,
      FooterComponentComponent,
      ContentComponentComponent,
      AboutComponent,
      HomeComponent,
      SinglePageComponent,
      DetailsComponent
  ],
    imports: [ 
      BrowserModule, 
      HttpClientModule, 
      FormsModule,
      ReactiveFormsModule, 
      RouterModule.forRoot([
        { 
          path: "", 
          component: HomeComponent,
          resolve: {
            emp: DataService
          }
        },
        { path: "about", component: AboutComponent },
        { path: "about", component: TestingComponent },
        { path: "details/:id", component: DetailsComponent },
        {
          path: "help", 
          loadChildren: () => import("./help.module").then(m => m.HelpModule)
        },
        { path: "**", component: HomeComponent }
      ])
    ],
    bootstrap: [ SinglePageComponent ]
})
export class AppModule {}