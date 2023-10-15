import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridListPageRoutingModule } from './grid-list-routing.module';

import { GridListPage } from './grid-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridListPageRoutingModule
  ],
  declarations: [GridListPage]
})
export class GridListPageModule {}
