import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { RegionsComponent } from './regions/regions.component';

const routes: Routes = [
  {path: "", redirectTo:"acceuil",pathMatch:'full'  },
  { path:'acceuil', component:AcceuilComponent },
  { path:'regions', component:RegionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
