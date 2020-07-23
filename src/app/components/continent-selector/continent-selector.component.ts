import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Continent } from "../model/continent.model";

@Component({
  selector: "continent-selector",
  templateUrl: "./continent-selector.component.html",
  styleUrls: ["./continent-selector.component.css"],
})
export class ContinentSelectorComponent implements OnInit {
  show: boolean = false;
  reactiveForm: FormGroup;
  countries: Continent[] = [
    {
      name: "Africa",
      code: "AF",
    },
    {
      name: "Europe",
      code: "EU",
    },
    {
      name: "Asia",
      code: "AS",
    },
    {
      name: "North America",
      code: "NA",
    },
    {
      name: "South America",
      code: "SA",
    },
    {
      name: "Antarctica",
      code: "AN",
    },
    {
      name: "Oceania",
      code: "OC",
    },
  ];


  ngOnInit() {
    this.createFormGroup();
  }

  createFormGroup() {
    return new FormGroup({
      continent: new FormControl('')
    })
  }

  openDropdown() {
    this.show = !this.show;
  }

  onSubmit() {
  }
}



