import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent  {
  isClicked:boolean = false;

  addMyCountry(){
    this.isClicked = true;
  }

}
