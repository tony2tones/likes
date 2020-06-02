import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent  {
  @Output() confirmationEvent = new EventEmitter<boolean>();
// will be input for the country flags
  confirmation:boolean =false;
  confirmed:boolean = false;

  public addMyCountry(){
    this.confirmed = true;
    this.confirmationEvent.emit(this.confirmed);
  }

  public decline($event){
    console.log('No clue what i all here', $event);
    this.confirmed = false;
    this.confirmationEvent.emit(this.confirmed);
  }

}
