import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FoundrySdkModule } from 'foundry-sdk';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FoundrySdkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
