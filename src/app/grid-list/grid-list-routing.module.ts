import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridListPage } from './grid-list.page';

const routes: Routes = [
  {
    path: '',
    component: GridListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridListPageRoutingModule {}
