import { Component, OnInit } from "@angular/core";
import { CounterService } from "./services/counter.service";
import { ToastMessageService } from './services/toast-message.service';

const util = require("./util/util");

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "likes";
  isClicked: boolean = false;
  count: number;
  countClicks: number = 0;

  constructor(private counterService: CounterService, private toast: ToastMessageService) {}

  ngOnInit() {
    this.getCount();
  }

  likeHandler() {
    this.isClicked = true;
    if (this.isClicked) this.count++;
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
    this.counterService.getCounter().subscribe(response => {
      const data = response.json();
      this.count = data;
    });
  }

  updateCounter() {
    this.counterService.postCounter(this.count).subscribe();
  }
}
