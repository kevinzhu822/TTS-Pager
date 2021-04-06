import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TherapistsComponent } from './therapists/therapists.component';
import { LocationsComponent } from './locations/locations.component';
import { TimeAndClientComponent } from './time-and-client/time-and-client.component';
import { NotesComponent } from './notes/notes.component';
import { SubmitButtonComponent } from './submitbutton/submitbutton.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import  {MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { LocationDialogComponent } from './locations/location-dialog/location-dialog.component';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material';
import { NoteDialogComponent } from './notes/note-dialog/note-dialog.component';
import { ConfirmationDialogComponent } from './submitbutton/confirmation-dialog/confirmation-dialog.component';
import { AlertDialogComponent } from './submitbutton/alert-dialog/alert-dialog.component';
import { AdminComponent } from './admin/admin.component';
import { TherapistViewComponent } from './therapistview/therapistview.component';


@NgModule({
  declarations: [
    AppComponent,
    TherapistsComponent,
    LocationsComponent,
    TimeAndClientComponent,
    NotesComponent,
    SubmitButtonComponent,
    LocationDialogComponent,
    NoteDialogComponent,
    ConfirmationDialogComponent,
    AlertDialogComponent,
    AdminComponent,
    TherapistViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  entryComponents: [LocationDialogComponent, NoteDialogComponent, ConfirmationDialogComponent, AlertDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
