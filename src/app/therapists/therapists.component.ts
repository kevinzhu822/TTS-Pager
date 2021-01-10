import { Component, OnInit } from '@angular/core';
import { THERAPISTS } from '../mock-therapists';
import { Therapist } from '../therapist';

@Component({
  selector: 'app-therapists',
  templateUrl: './therapists.component.html',
  styleUrls: ['./therapists.component.scss']
})
export class TherapistsComponent implements OnInit {
  therapists = THERAPISTS;
  selectedTherapist: Therapist;

  constructor() { }

  ngOnInit() {
  }
  onSelect(therapist: Therapist): void {
    if (this.selectedTherapist != null && this.selectedTherapist == therapist ) {
      this.selectedTherapist = null;
    } else {
      this.selectedTherapist = therapist;
    }
  }
}
