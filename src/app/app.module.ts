import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ROUTES } from './app.routing';

import {
  IndexComponent,
  DetailComponent,
  NoContentComponent
} from './components';

import {
  DatePipe,
  TemperaturePipe,
  DayPipe
} from './pipes';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DetailComponent,
    NoContentComponent,
    DatePipe,
    TemperaturePipe,
    DayPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'weather-angular-universal'}),
    HttpClientModule,
    BrowserTransferStateModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
