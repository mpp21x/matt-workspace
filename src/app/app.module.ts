import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from './shared/shared.module';
import {NgxSpinnerModule} from 'ngx-spinner';
import {MattTwModule} from 'ng-matt-tw-library';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
    NgxSpinnerModule,
    MattTwModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
