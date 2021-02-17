import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {
  public data : any;
  public keys : Array<string>;
  public presentableData = [];   // [["Therapist","Patrick"], ["Location","Body Room 5"], ["Time", "11:30 AM"],["Client", "Kevin"]]
  public notesArray = []; // ["Note1", "Note2", "Note3"]
  

  constructor(public dialogRef: MatDialogRef<ConfirmationDialogComponent>, @Inject(MAT_DIALOG_DATA) public modalData: any) {
    this.data = modalData.data;
    this.keys = Object.keys(this.data);
    this.processData(this.data, this.keys);
  }

  ngOnInit() {
  }

  onConfirm() {
    this.closeModal(true);
  }

  onBack() {
    this.closeModal(null);
  }

  closeModal(eventData) {
    // set eventData to true for confirm
    this.dialogRef.close({event: eventData});
  }

  processData(data, keys) {
    var numInfos = 3;
    this.presentableData = [];
    // get therapist name
    const therapist = data["therapist"]["name"];

    // get location
    const location = data["location"]["hasInput"] ? data["location"]["name"] + " " + data["location"]["inputData"] : data["location"]["name"];

    // get time
    const time = data["time"]["name"];

    // get client name (optional)
    if (keys.includes("client")) {
      const client = data["client"]["name"];
      this.presentableData.push(["Therapist", therapist], ["Location", location], ["Time", time], ["Client Name", client]);
      numInfos = numInfos + 1;
    } else {
      this.presentableData.push(["Therapist", therapist], ["Location", location], ["Time", time]);
    }


    const numNotes = keys.length - numInfos;
    if (numNotes > 0) {
      var otherChosen = false; // other should be at the very end
      var otherInput = null; // stores the text in other
      var notes = [];
      // loop through keys and process the notes
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (key == "therapist" || key == "location" || key == "time" || key == "client") {
          continue;
        } else {
          if (!data[key]["hasInput"]) {
            notes.push(data[key]["name"]);
          } else {
            if (data[key]["name"] == "Other") {
              otherChosen = true;
              otherInput = data[key]["inputData"];
              continue;
            } else {
            const input = data[key]["inputData"];
            notes.push(data[key]["name"]+": "+input);
            }
          }
        }
      }

      // see if other is there
      if (otherChosen) {
        notes.push("Other: " + otherInput);
      }
      this.notesArray.push(...notes); // put in notesArray
    }
  }

}
