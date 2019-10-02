import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityDashboardComponent } from './city-dashboard/city-dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { AddComponent } from './add/add.component';
import { QrScannedComponent } from './qr-scanned/qr-scanned.component';


const routes: Routes = [ { path: 'city-dashboard', component: CityDashboardComponent }, { path: 'menu', component: MenuComponent }, { path: 'add', component: AddComponent }, { path: 'qr-scanned', component: QrScannedComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
