import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NOTES } from '../mock-notes';
import { Note } from '../note';
import { SubmissionService } from '../submission.service';
import { NoteDialogComponent } from './note-dialog/note-dialog.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notes = NOTES;
  selectedNotes = {};
  keys: string[];

  constructor(private submissionService: SubmissionService, private dialog: MatDialog) { }

  ngOnInit() {
  }

  onSelect(note: Note) {
    this.keys = Object.keys(this.selectedNotes);
    if (this.keys.includes(note.name)) {
      delete this.selectedNotes[note.name];
      // remove from submissionService as well
      this.submissionService.removeField(note.name);

    } else {
      if (note.input) {
        this.openModal(note.name);

        // get user input
        // this.selectedNotes[note.name] = "Some user input"; // TODO: change this
        // this.submissionService.setField("Note-"+note.name, note.name, true, "user input note"); // change this
      } else {
        this.selectedNotes[note.name] = 1;
        this.submissionService.setField("Note-"+note.name, note.name, false, null);
      }
    }
  }

  openModal(name) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      noteType: name,
    }
    const dialogRef = this.dialog.open(NoteDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      this.selectedNotes[name] = data.event;
      this.submissionService.setField("Note-"+name, name, true, data.event);
    });
  }
}
