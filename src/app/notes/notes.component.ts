import { Component, OnInit } from '@angular/core';
import { NOTES } from '../mock-notes';
import { Note } from '../note';
import { SubmissionService } from '../submission.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notes = NOTES;
  selectedNotes = {};
  keys: string[];

  constructor(private submissionService: SubmissionService) { }

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
        // get user input
        this.selectedNotes[note.name] = "Some user input"; // TODO: change this
        this.submissionService.setField("Note-"+note.name, note.name, true, "user input note"); // change this
      } else {
        this.selectedNotes[note.name] = 1;
        this.submissionService.setField("Note-"+note.name, note.name, false, null);
      }
    }
  }

}
