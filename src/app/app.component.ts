import {
  Component,
  ViewChild,
  OnInit,
  AfterViewInit,
  Input,
} from "@angular/core";
import { CounterService } from "../app/services/counter.service";
import { ToastMessageService } from "../app/services/toast-message.service";

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
  isClicked: boolean = false; // change here
  count: number;
  countClicks: number = 0;
  clickCounter: number = 3;
  noClicks: boolean = false;
  showbanner: Boolean = false;
  showAddCountry: Boolean = false; // change here

  constructor(
    private counterService: CounterService,
    private toast: ToastMessageService
  ) {}

  ngOnInit() {
    this.getCount();
  }

  ngAfterViewInit() {
    // this.countryAdd = this.addCountry.countryAdd
  }

  likeHandler() {
    this.isClicked = true;
    if (this.isClicked) this.count++;
    this.clickCounter--;
    let counter = this.countClicks;
    this.countChecker(counter);
    this.updateCounter();
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
    this.counterService.putcontinent().subscribe((response) => {
      // const data = response.json();
      // this.count = data;
      console.log('the response ', response);
    });
  }

  updateCounter() {
    // this.counterService.postCounter(this.count).subscribe();
  }

  countChecker(count) {
    // console.log('test num function ', count);
    if (count > 1) this.showbanner = true;
    // if (count === 0) {
    //   console.log('should show');
    //   this.noClicks = true;}
  }

  testShowHide(state) {
    if (state) this.showAddCountry = true;
    if (!state) this.showbanner = state;
    // console.log('Is this',$event);
  }
}
