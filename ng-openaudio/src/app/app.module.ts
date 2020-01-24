import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgOpenaudioModule } from 'projects/ng-openaudio/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgOpenaudioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
