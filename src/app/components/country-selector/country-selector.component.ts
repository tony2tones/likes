import { Component, OnInit } from "@angular/core";

@Component({
  selector: "country-selector",
  templateUrl: "./country-selector.component.html",
  styleUrls: ["./country-selector.component.css"],
})
export class CountrySelectorComponent implements OnInit {
  show: boolean = false;
  countries = [
    {
      name: "South Africa",
      code: "ZA",
    },
    {
      name: "Greece",
      code: "GR",
    },
  ];
  constructor() {}

  ngOnInit() {}

  openDropdown() {
    this.show = !this.show;
  }
}
