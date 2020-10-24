import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatemodalpopupPageRoutingModule } from './updatemodalpopup-routing.module';

import { UpdatemodalpopupPage } from './updatemodalpopup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatemodalpopupPageRoutingModule
  ],
  declarations: [UpdatemodalpopupPage]
})
export class UpdatemodalpopupPageModule {}
