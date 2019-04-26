import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "likes";
  isClicked: boolean = false;
  count = 0;

  clickHandler() {
    this.isClicked = !this.isClicked;
    if (this.isClicked) this.count++;
    else this.count--;
  }

  likeHandler() {
    this.isClicked = !this.isClicked;
    if (this.isClicked) this.count++;
    else this.count--;
  }

  noLikeHandler() {
    this.isClicked = !this.isClicked;
    if (this.isClicked) this.count--;
    else this.count++;
  }
}
