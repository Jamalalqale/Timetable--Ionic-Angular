import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FriPageRoutingModule } from './fri-routing.module';

import { FriPage } from './fri.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FriPageRoutingModule
  ],
  declarations: [FriPage]
})
export class FriPageModule {}
