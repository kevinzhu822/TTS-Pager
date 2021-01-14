import { Component, OnInit } from '@angular/core';
import { SubmissionService } from '../submission.service';

@Component({
  selector: 'app-submitbutton',
  templateUrl: './submitbutton.component.html',
  styleUrls: ['./submitbutton.component.scss']
})
export class SubmitButtonComponent implements OnInit {

  constructor(private submissionService: SubmissionService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submissionService.masterSubmit();
  }

}
