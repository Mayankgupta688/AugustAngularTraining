
import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";

import { HelpComponent } from './app/help/help.component';


@NgModule({
    declarations: [
      HelpComponent
  ],
    imports: [ 
      RouterModule.forChild([{ 
          path: "", 
          component: HelpComponent
        }])
    ]
})
export class HelpModule {}