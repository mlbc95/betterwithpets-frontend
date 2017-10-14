/**
 * Created by scope on 10/14/17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MapsComponent} from "./maps.component";
import {AgmCoreModule} from "@agm/core";


@NgModule({
  imports: [
    AgmCoreModule,
    CommonModule
  ],
  exports: [
    MapsComponent,
  ],
  declarations: [
    MapsComponent,
  ],
  providers: [
    // MapsService,
  ],
  entryComponents: [
    MapsComponent,
  ],
})
export class MapsModule { }
