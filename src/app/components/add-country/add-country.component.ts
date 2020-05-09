import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent  {
  // @Output() confirmationEvent = new EventEmitter<boolean>();
// will be input for the country flags
  confirmation:boolean =false;
  // isClicked:boolean = false;

  public addMyCountry(){
    // this.confirmation = true;
    // this.confirmationEvent.emit(this.confirmation);
  }

}
