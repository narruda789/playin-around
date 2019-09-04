import { NgModule } from '@angular/core';
import { SeashellLibComponent } from './seashell-lib.component';
import { SeashellLibRoutingModule } from './seashell-lib-routing.module';


@NgModule({
  declarations: [SeashellLibComponent],
  imports: [
    SeashellLibRoutingModule
  ],
  exports: [
    SeashellLibComponent
  ]
})
export class SeashellLibModule { }
