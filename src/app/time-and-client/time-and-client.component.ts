import { Component, OnInit } from '@angular/core';
import { SubmissionService } from '../submission.service';

@Component({
  selector: 'app-time-and-client',
  templateUrl: './time-and-client.component.html',
  styleUrls: ['./time-and-client.component.scss']
})
export class TimeAndClientComponent implements OnInit {
  public inputTime: string;
  public inputClientName: string;
  
  constructor(private submissionService: SubmissionService) { }

  ngOnInit() {
  }

  timeChange() {
    this.submissionService.setField("time", this.inputTime, false, null);
  }

  clientChange() {
    if (this.inputClientName) {
      this.submissionService.setField("client", this.inputClientName, false, null);
    }
  }

}
