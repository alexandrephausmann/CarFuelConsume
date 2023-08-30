import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FuelComponent } from './fuel.component';

@NgModule({
  declarations: [
    FuelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [FuelComponent]
})
export class FuelModule { }
