import { Component, OnInit } from '@angular/core';
import { LOCATIONS } from '../mock-locations';
import { Location } from '../location';
import { SubmissionService } from '../submission.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {InputModalComponent} from '../input-modal/input-modal.component';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  locations = LOCATIONS;
  selectedLocation: string;
  locationNumber: number;

  constructor(private submissionService: SubmissionService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  openModal() {
    this.modalService.open(InputModalComponent);
  }

  onSelect(location: Location): void {
    if (this.selectedLocation != null && this.selectedLocation == location.name ) {
      this.selectedLocation = null;
      this.locationNumber = null;
      this.submissionService.removeField("location");
    } else {
      this.selectedLocation = location.name;
      // this.openModal();

      if (location.input) {
        // open modal and get user input
        this.submissionService.setField("location", this.selectedLocation, true, "1"); //change
      } else {
        this.submissionService.setField("location", this.selectedLocation, false, "");
      }
    }
  }
}
