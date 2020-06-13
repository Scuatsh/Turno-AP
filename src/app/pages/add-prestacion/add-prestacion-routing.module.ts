import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPrestacionPage } from './add-prestacion.page';

const routes: Routes = [
  {
    path: '',
    component: AddPrestacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPrestacionPageRoutingModule {}
