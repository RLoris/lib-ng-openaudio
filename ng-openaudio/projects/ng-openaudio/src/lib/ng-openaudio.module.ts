import { NgModule } from '@angular/core';
import { NgOpenaudioComponent } from './ng-openaudio.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [NgOpenaudioComponent],
  imports: [
    BrowserModule
  ],
  exports: [NgOpenaudioComponent]
})
export class NgOpenaudioModule { }
