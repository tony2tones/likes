import { Component, ViewChild, OnInit, AfterViewInit, Input } from "@angular/core";
import { CounterService } from "../app/services/counter.service";
import { ToastMessageService } from "../app/services/toast-message.service";
import { AddCountryComponent } from '../app/components/add-country/add-country.component';

const util = require("./util/util");

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, AfterViewInit {
  // @Input() countryAdd: boolean = false;
  
  // @ViewChild(AddCountryComponent) addCountry;
  title = "likes";
  isClicked: boolean = false;
  count: number;
  countClicks: number = 0;
  clickCounter: number = 3;
  noClicks: boolean = false;

  constructor(
    private counterService: CounterService,
    private toast: ToastMessageService
  ) {}

  ngOnInit() {
    this.getCount();
  }

  ngAfterViewInit(){
// this.countryAdd = this.addCountry.countryAdd
  }

  likeHandler() {
    this.isClicked = true;
    if (this.isClicked) this.count++;
    this.clickCounter--;
    this.updateCounter();
    this.countChecker(this.clickCounter);
    let clicks = this.countClicks++;
    this.toast.showSuccess(clicks);
    util.buttonToggle("noLike", false);
  }

  noLikeHandler() {
    this.isClicked = false;
    if (this.count === 0) util.buttonToggle("noLike", true);
    else this.count--;
    this.updateCounter();
    let clicks = this.countClicks--;
    this.toast.showFailure(clicks);
  }

  getCount() {
    this.counterService.getCounter().subscribe((response) => {
      const data = response.json();
      this.count = data;
    });
  }

  updateCounter() {
    // this.counterService.postCounter(this.count).subscribe();
  }

  countChecker(count) {
    if(count === 0 ) {
      this.noClicks = true;
    console.log('you have clicked.', count);
    } 
  }

  testShowHide() {
    // this.countryAdd = countryAdd;
  }

}
