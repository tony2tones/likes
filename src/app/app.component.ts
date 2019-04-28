import { Component, OnInit } from "@angular/core";
import { CounterService } from "./counter/counter.service";

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

  constructor(private counterService: CounterService) {}

  ngOnInit() {
    this.getCount()
  }

  setCount(count:number) {
    this.counterService
      .postCounter(this.count)
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      );
  }

  likeHandler() {
    this.isClicked = true;
    if (this.isClicked) this.count++;
    else this.count--;
    util.likeToggle();
  }

  noLikeHandler() {
    this.isClicked = false;
    if (!this.isClicked) this.count--;
    else this.count++;
    util.noLikeToggle();
  }

  getCount() {
    this.counterService.getCounter().subscribe(
      response => {
        const data = response.json();
        this.count = data;
      },
      error => console.log(error)
    );
  }
}
