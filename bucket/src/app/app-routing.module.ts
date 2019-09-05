import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeashellLibModule, SeashellLibComponent } from 'seashell-lib';


const routes: Routes = [
  {
    path: 'seashell',
    loadChildren: () => import('seashell-lib').then(m => m.SeashellLibModule),
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
