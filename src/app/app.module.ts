import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule, MatToolbarModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LaunchDataDashboardComponent } from './launch-dashboard/launch-data-dashboard/launch-data-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiGeneralInterceptor } from './services/interceptors/api-interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    LaunchDataDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    ScrollingModule,
    FlexLayoutModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiGeneralInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
