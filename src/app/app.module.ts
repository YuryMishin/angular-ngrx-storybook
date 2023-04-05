import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button.component';
import { SimpleKnobsComponent } from './components/knobs.component';
import { AllKnobsComponent } from './components/all-knobs.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    SimpleKnobsComponent,
    AllKnobsComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
