import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // ✅ Needed for ngModel

import { AppComponent } from './app.component';
import { RsvpManagerComponent } from './rsvp-manager/rsvp-manager.component'; // ✅ You MUST import this

@NgModule({
  declarations: [
    AppComponent,
    RsvpManagerComponent // ✅ Declare the component here!
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
