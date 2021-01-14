import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TherapistsComponent } from './therapists/therapists.component';
import { LocationsComponent } from './locations/locations.component';
import { TimeAndClientComponent } from './time-and-client/time-and-client.component';
import { NotesComponent } from './notes/notes.component';
import { SubmitButtonComponent } from './submitbutton/submitbutton.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { InputModalComponent } from './input-modal/input-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TherapistsComponent,
    LocationsComponent,
    TimeAndClientComponent,
    NotesComponent,
    SubmitButtonComponent,
    InputModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NgbModule
  ],
  entryComponents: [InputModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
