import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { ComponentCreatorComponent } from './component-creator/component-creator.component';
import { KtdGridModule } from '@katoid/angular-grid-layout';
import { ToggleDisplayDetailsComponent } from './toggle-display-details/toggle-display-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    ComponentCreatorComponent,
    ToggleDisplayDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    KtdGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
