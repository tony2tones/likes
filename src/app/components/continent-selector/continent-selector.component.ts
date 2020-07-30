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
  // continents;
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
    console.log('continents currently', this.continentsData);
    // this.setContinents(this.continents);
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

  objectKeys(obj) {
    let continentsList = Object.keys(obj);
    let goodRepo = [];
    for (const prop of continentsList) {
      goodRepo.push(continentsList[prop]);
    }
    for (const [key, value] of Object.entries(this.continents)) {

    }
    obj.each(function (key, value) { console.log(key + " " + value) });
    // console.log('this is the new continents from zero', this.continents[0].name);
    // console.log('this is the new continents from start', this.continents);
    // console.log('this is the continent list ', continentsList);
    // console.log('this is the some ', goodRepo);
  }

  // getContinents() {
  //   this.continentService.getContinents().subscribe(
  //     (response) => {
  //       this.continents = response.json();
  //       // this.objectKeys(this.continents);
  //       console.log('this should be a continentsss 2 of em', this.continents);
  //     });
  // }


  setContinents(data: any[]) {
    let continents = [];
    var arrayLength = data.length;
    for (var i = 1; i < arrayLength; i++) {
      continents.push(data[i]);
      this.continents = continents;
    }
    console.log('should have continents', this.continents);
  }

  onSubmit() {
    console.log(this.reactiveForm.controls['continent'].value);
  }
}



