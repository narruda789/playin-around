import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeashellLibComponent } from 'projects/seashell-lib/src/public-api';
import { SeashellLibModule } from 'projects/seashell-lib/src/lib/seashell-lib.module';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => SeashellLibModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
