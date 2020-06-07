import { Component, OnInit } from "@angular/core";
import { Country } from "../model/country.model";

@Component({
  selector: "country-selector",
  templateUrl: "./country-selector.component.html",
  styleUrls: ["./country-selector.component.css"],
})
export class CountrySelectorComponent implements OnInit {
  show: boolean = false;
  countries: Country[] = [
    {
      name: "South Africa",
      code: "za",
    },
    {
      name: "Greece",
      code: "gr",
    },
  ];
  constructor() {}

  ngOnInit() {}

  openDropdown() {
    this.show = !this.show;
  }
}
