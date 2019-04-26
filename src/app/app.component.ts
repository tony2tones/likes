import { Component, OnInit } from "@angular/core";

const util = require('./util/util');

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "likes";
  isClicked: boolean = false;
  count = 2;

  ngOnInit() {
    if (this.count === 0) {
      util.noLikeToggle();
    }
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

  buttonToggle(btnId: string, bool: boolean) {
    const element = document.getElementById(btnId);
    (<HTMLInputElement>element).disabled = bool;
  }

  likeToggle() {
    this.buttonToggle("like", true);
    this.buttonToggle("noLike", false);
  }
  noLikeToggle() {
    this.buttonToggle("like", false);
    this.buttonToggle("noLike", true);
  }
}
