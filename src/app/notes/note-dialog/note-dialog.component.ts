import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-note-dialog',
  templateUrl: './note-dialog.component.html',
  styleUrls: ['./note-dialog.component.scss']
})
export class NoteDialogComponent implements OnInit {
  noteText: string;
  noteType: string;
  constructor(public dialogRef: MatDialogRef<NoteDialogComponent>, @Inject(MAT_DIALOG_DATA) public modalData: any) {
    this.noteType = modalData.noteType;  
  }

  
  ngOnInit() {
  }

  submit() {
    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close({event: this.noteText});
  }

}
