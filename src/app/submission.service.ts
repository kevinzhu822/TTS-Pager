import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AlertDialogComponent } from './submitbutton/alert-dialog/alert-dialog.component';
import { ConfirmationDialogComponent } from './submitbutton/confirmation-dialog/confirmation-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {
  data = {};

  constructor(private dialog: MatDialog) { }

  /* sticks the following entry into "data":
    <<type: {"name": field_name, "hasInput": has_input, "inputData": input_data}>>
    - set "has_input" to true if the input field is needed
    - the "input_data" field should only be used for fields that require inputs.
    - simply stores a blank string otherwise

    - type is used for determining if a field has already been used
      - i.e. if a therapist has already been selected
      - exception, since multiple notes can be selected, we input "field_name" as type
  */
  public setField(type, field_name, has_input: boolean, input_data) {
    if (this.data[type] != null) {
      delete this.data[type];
    }
    this.data[type] = {"name": field_name, "hasInput": has_input, "inputData": input_data};
  }

  public removeField(type) {
    delete this.data[type];
  }

  public checkRequiredFields() {
    return this.data["therapist"] != null && this.data["location"] != null && this.data["time"] != null;
  }

  public masterSubmit() {
    if (!this.checkRequiredFields()) {
      // open a modal telling you to fill out more fields
      this.dialog.open(AlertDialogComponent);
    } else {
      console.log(this.data);
      // opens a modal
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = {
        data: this.data,
      }
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, dialogConfig);
      
      dialogRef.afterClosed().subscribe(data => {
        if (data != null) {
          // send to other screen
          console.log("submitted!");
          return;
        }
      });
    }
  }
}
