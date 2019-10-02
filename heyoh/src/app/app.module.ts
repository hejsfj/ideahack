import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AddComponent } from './add/add.component';
import { QrScannedComponent } from './qr-scanned/qr-scanned.component';
import { CityDashboardComponent } from './city-dashboard/city-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AddComponent,
    QrScannedComponent,
    CityDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
