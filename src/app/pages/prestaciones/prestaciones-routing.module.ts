import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrestacionesPage } from './prestaciones.page';

const routes: Routes = [
  {
    path: '',
    component: PrestacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrestacionesPageRoutingModule {}
