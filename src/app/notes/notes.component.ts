import { Component, OnInit } from '@angular/core';
import { NOTES, NoteEnum } from '../mock-notes';
import { Note } from '../note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notes = NOTES;
  noteEnum = NoteEnum;
  selectedNotes = new Array(7);
  pregnantNotes: string;
  otherNotes: string;

  constructor() { }

  ngOnInit() {
  }

  onSelect(note: Note) {
    if (this.selectedNotes[NoteEnum[note.name]] == 1) {
      this.selectedNotes[NoteEnum[note.name]] = 0;
    } else {
      this.selectedNotes[NoteEnum[note.name]] = 1;
    }
    console.log(this.selectedNotes);
  }

}
