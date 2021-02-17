import { Component, OnInit } from '@angular/core';
import { LOCATIONS } from '../mock-locations';
import { Location } from '../location';
import { SubmissionService } from '../submission.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { LocationDialogComponent } from './location-dialog/location-dialog.component';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  locations = LOCATIONS;
  selectedLocation: string;
  locationNumber: any;

  constructor(private submissionService: SubmissionService, private dialog: MatDialog) { }

  ngOnInit() {
  }

  openModal(stationName) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      stationName: stationName,
    }
    const dialogRef = this.dialog.open(LocationDialogComponent, dialogConfig);
    
    dialogRef.afterClosed().subscribe(data => {
      if (data != null) {
        this.locationNumber = data.event;
        this.selectedLocation = stationName;
        this.submissionService.setField("location", this.selectedLocation, true, this.locationNumber);
    }
    });
  }

  onSelect(location: Location): void {
    this.locationNumber = null;

    if (this.selectedLocation != null && this.selectedLocation == location.name ) {
      this.selectedLocation = null;
      this.submissionService.removeField("location");
    } else {
      this.selectedLocation = location.name;

      if (location.input) {
        // open modal and get user input
        this.selectedLocation = null;
        this.openModal(location.name);
      } else {
        this.submissionService.setField("location", this.selectedLocation, false, null);
      }
    }
  }
}
