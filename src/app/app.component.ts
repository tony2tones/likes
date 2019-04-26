import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "likes";
  isClicked: boolean = false;
  count = 0;

  ngOnInit() {
    if (this.count === 0) {
      this.noLikeToggle();
    }
  }

  likeHandler() {
    this.isClicked = true;
    if (this.isClicked) this.count++;
    else this.count--;
    this.likeToggle();
  }

  noLikeHandler() {
    this.isClicked = false;
    if (!this.isClicked) this.count--;
    else this.count++;
    this.noLikeToggle();
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
