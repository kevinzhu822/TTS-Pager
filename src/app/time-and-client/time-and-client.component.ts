import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-and-client',
  templateUrl: './time-and-client.component.html',
  styleUrls: ['./time-and-client.component.scss']
})
export class TimeAndClientComponent implements OnInit {
  inputTime: string;
  inputClientName: string;
  
  constructor() { }

  ngOnInit() {
  }

}
