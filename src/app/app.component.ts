import { Component, OnInit } from "@angular/core";
import { CounterService } from "./counter/counter.service";
import { ToastrService } from "ngx-toastr";

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

  constructor(
    private counterService: CounterService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getCount();
  }

  likeHandler() {
    this.isClicked = true;
    if (this.isClicked) this.count++;
    this.updateCounter();
    let toastie = this.countClicks++;
    this.showSuccess(toastie);
    util.buttonToggle("noLike", false);
  }

  noLikeHandler() {
    this.isClicked = false;
    if (this.count === 0) util.buttonToggle("noLike", true);
    else this.count--;
    this.updateCounter();
  }

  showSuccess(counter: number) {
    let text: string;
    switch (counter) {
      case 1:
        text = "Thanks a bundle";
        break;
      case 5:
        text = "Thank you, you are too kind";
        break;
      case 10:
        text = "You really should't have!";
        break;
      case 12:
        text = "This is too much now stop it";
        break;
      case 30:
        text = "I had no idea you were going to be clicking the like button so much";
        break;
        case 50:
        text = "Congrats you've reached all the switch cases i've bothered to cater for, 50 clickers";
        break;
      default:
        text = "Thank you very much";
    }
    this.toastr.success(text, "Notification");
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
