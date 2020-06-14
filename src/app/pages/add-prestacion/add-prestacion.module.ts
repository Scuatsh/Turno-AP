import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPrestacionPageRoutingModule } from './add-prestacion-routing.module';

import { AddPrestacionPage } from './add-prestacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddPrestacionPageRoutingModule
  ],
  declarations: [AddPrestacionPage]
})
export class AddPrestacionPageModule {}
