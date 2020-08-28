import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RkCheckComponent } from './rk-check/rk-check.component';
import { ViewModule } from './view/view.module';
import { RktestService } from './rktest.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ViewChildOneComponent } from './view-child-one/view-child-one.component';
import { ViewChildTwoComponent } from './view-child-two/view-child-two.component';


@NgModule({
  declarations: [
    AppComponent,
    RkCheckComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ViewModule,
    AppRoutingModule
  ],
  providers: [
    RktestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
