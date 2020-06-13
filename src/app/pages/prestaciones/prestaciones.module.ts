import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrestacionesPageRoutingModule } from './prestaciones-routing.module';

import { PrestacionesPage } from './prestaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrestacionesPageRoutingModule
  ],
  declarations: [PrestacionesPage]
})
export class PrestacionesPageModule {}
