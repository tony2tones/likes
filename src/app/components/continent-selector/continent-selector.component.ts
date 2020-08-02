import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Continent } from "../model/continent.model";
// import { Continents } from '../model/continents.data';

import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: "continent-selector",
  templateUrl: "./continent-selector.component.html",
  styleUrls: ["./continent-selector.component.css"],
})
export class ContinentSelectorComponent implements OnInit {
  constructor(private continentService: CounterService) {
  }
  show: boolean = false;
  reactiveForm: FormGroup;
  continentSelect: any;
  continentsData = [
    new Continent('Africa', 'AF'),
    new Continent('Europe', 'EU'),
    new Continent('Asia', 'AS'),
    new Continent('North America', 'NA'),
    new Continent('South America', 'SA'),
    new Continent('Antarctica', 'AN'),
    new Continent('Oceania', 'OC'),
  ]
  continents:any[] = this.continentsData;

  ngOnInit() {
    // this.getContinents();
    this.reactiveForm = this.createFormGroup();
  }

  createFormGroup() {
    return new FormGroup({
      continent: new FormControl('')
    })
  }

  changeCountry(event) {
    console.log('it has been clicked', event);
    this.continentSelect = event;
  }

  // getContinents() {
  //   this.continentService.getContinents().subscribe(
  //     (response) => {
  //       this.continents = response.json();
  //       // this.objectKeys(this.continents);
  //       console.log('this should be a continentsss 2 of em', this.continents);
  //     });
  // }

  onSubmit() {
    console.log(this.reactiveForm.controls['continent'].value);
  }
}



