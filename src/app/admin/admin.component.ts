import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [MatSnackBar]
})
export class AdminComponent implements OnInit {
  title = 'TTS Pager (Admin)';

  constructor() { }

  ngOnInit() {
  }

}
