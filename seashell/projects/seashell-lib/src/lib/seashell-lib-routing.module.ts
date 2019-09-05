import { Routes, RouterModule } from '@angular/router';
import { SeashellLibComponent } from './seashell-lib.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{
  path: '',
  component: SeashellLibComponent,
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeashellLibRoutingModule {}
