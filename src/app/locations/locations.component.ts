import { Component, OnInit } from '@angular/core';
import { LOCATIONS } from '../mock-locations';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  locations = LOCATIONS;
  selectedLocation: string;

  constructor() { }

  ngOnInit() {
  }

  onSelect(location: string): void {
    if (this.selectedLocation != null && this.selectedLocation == location ) {
      this.selectedLocation = null;
    } else {
      this.selectedLocation = location;
    }
  }
}
