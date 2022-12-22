import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AccountComponent } from './account/account.component';
import { DetailsRegionsComponent } from './details-regions/details-regions.component';
import { AuthGuard } from './guard/auth.guard';
import { NavComponent } from './nav/nav.component';
import { RegionsComponent } from './regions/regions.component';

const routes: Routes = [
  { path: 'account', component: AccountComponent },
  {
    path: 'dashboard', component: NavComponent,canActivate:[AuthGuard], children: [
      { path: "", redirectTo: "acceuil", pathMatch: 'full' },
      { path: 'acceuil', component: AcceuilComponent },
      { path: 'regions', component: RegionsComponent },
      { path: 'detailsr', component: DetailsRegionsComponent },
    ]
  },
  { path: "", redirectTo: "account", pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
