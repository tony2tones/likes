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
    this.isClicked = true;
    if (this.isClicked) this.count++;
    else this.count--;
    this.buttonToggle("like",true);
    this.buttonToggle("noLike", false);
  }

  noLikeHandler() {
    this.isClicked = false;
    if (!this.isClicked) this.count--;
    else this.count++;
    this.buttonToggle("noLike", true);
    this.buttonToggle("like", false);
  }

  buttonToggle(btnId: string, bool:boolean) {
    const element = document.getElementById(btnId);
    (<HTMLInputElement>element).disabled = bool;
  }
}
