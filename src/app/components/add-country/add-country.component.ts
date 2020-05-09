import { Component, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "add-country",
  templateUrl: "./add-country.component.html",
  styleUrls: ["./add-country.component.css"],
})
export class AddCountryComponent {
  @Input() confirmData = new EventEmitter<boolean>();
   confirmation: boolean = false;
  // will be input for the country flags

  // isClicked:boolean = false;

  public clickConfimation() {
    this.confirmation = true;
    this.confirmData.emit(this.confirmation);
    console.log("cleeecked");
    // this.confirmationEvent.emit(this.confirmation);
  }
}
