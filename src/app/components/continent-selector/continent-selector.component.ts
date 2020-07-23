import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Continent } from "../model/continent.model";

@Component({
  selector: "continent-selector",
  templateUrl: "./continent-selector.component.html",
  styleUrls: ["./continent-selector.component.css"],
})
export class ContinentSelectorComponent implements OnInit {
  show: boolean = false;
  reactiveForm: FormGroup;
  continents: Continent[] = [
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
   this.reactiveForm = this.createFormGroup();
  }

  createFormGroup() {
    return new FormGroup({
      continent: new FormControl('')
    })
  }

  changeCountry(event) {
    console.log('it has been clicked', event);
  }


  // openDropdown() {
  //   this.show = !this.show;
  // }

  onSubmit() {
    console.log(this.reactiveForm.controls['continent'].value);
  }
}



