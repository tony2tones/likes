import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.css']
})
export class CountrySelectorComponent implements OnInit {
  show: boolean = false
  countries = [
    ['South Africa']
  ]
  constructor() { }

  ngOnInit() {
  }

  openDropdown() {
    this.show = !this.show;
  }

}
