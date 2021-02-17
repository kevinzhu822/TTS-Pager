import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-location-dialog',
  templateUrl: './location-dialog.component.html',
  styleUrls: ['./location-dialog.component.scss']
})
export class LocationDialogComponent implements OnInit {
  public stationNumber: number;
  public stationName: string;

  constructor(
    public dialogRef: MatDialogRef<LocationDialogComponent>,
     @Inject(MAT_DIALOG_DATA) public modalData: any) {
    this.stationName = modalData.stationName;
  }

  ngOnInit() {
  }

  submit() {
    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close({event: this.stationNumber});
  }

}
