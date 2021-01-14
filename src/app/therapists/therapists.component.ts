import { Component, OnInit } from '@angular/core';
import { THERAPISTS } from '../mock-therapists';
import { SubmissionService } from '../submission.service';
import { Therapist } from '../therapist';

@Component({
  selector: 'app-therapists',
  templateUrl: './therapists.component.html',
  styleUrls: ['./therapists.component.scss']
})
export class TherapistsComponent implements OnInit {
  therapists = THERAPISTS;
  selectedTherapist: Therapist;
  

  constructor(private submissionService: SubmissionService) { }

  ngOnInit() {
  }
  onSelect(therapist: Therapist): void {
    if (this.selectedTherapist != null && this.selectedTherapist == therapist ) {
      this.selectedTherapist = null;
      this.submissionService.removeField("therapist");
    } else {
      this.selectedTherapist = therapist;
      this.submissionService.setField("therapist", this.selectedTherapist.name, false, null);
    }
  }
}
