import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Continents } from "../model/continent.model";
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: "continent-selector",
  templateUrl: "./continent-selector.component.html",
  styleUrls: ["./continent-selector.component.css"],
})
export class ContinentSelectorComponent implements OnInit {
  constructor(private _getContinent: CounterService) { }
  show: boolean = false;
  reactiveForm: FormGroup;
  continents: any=[];
  // continents;


  ngOnInit() {
    this._getContinent.getContinents().subscribe(
      (response) => { 
        this.continents = response.json();
        this.continents = Array.of(this.continents);
      console.log('should work and show continents', this.continents);
      console.log('should work and show continents', this.continents);
      });
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
    console.log('This is an obj', obj)
    let test = Object.keys(obj);
    console.log('This is an obj', test);

}


  // openDropdown() {
  //   this.show = !this.show;
  // }

  onSubmit() {
    console.log(this.reactiveForm.controls['continent'].value);
  }
}



