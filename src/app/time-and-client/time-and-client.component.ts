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
  public currentTime: string;
  
  constructor(private submissionService: SubmissionService) { }
  
  ngOnInit(): void {
    this.currentTime = this.getTimeNow();
  }

  onSelectCurrentTime() {
    this.inputTime = this.currentTime;
    this.timeChange();
  }


  timeChange() {
    this.submissionService.setField("time", this.inputTime, false, null);
  }

  getTimeNow() {
    var current = new Date();
    const hours = (current.getHours()%12).toString();
    var minutes = current.getMinutes().toString();
    if (minutes.length == 1) {
      minutes = "0"+minutes;
    }
    var hoursMinutes = hours + ":" + minutes;
    var time = current.toLocaleTimeString();
    var suffix = time.substring(time.length-2, time.length);
    return hoursMinutes+" "+suffix;
    
  }

  clientChange() {
    if (this.inputClientName) {
      this.submissionService.setField("client", this.inputClientName, false, null);
    } else {
      this.submissionService.removeField("client");
    }
  }

}
