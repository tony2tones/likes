import { Component, OnInit } from "@angular/core";
import { CounterService } from "./counter/counter.service";
import { ConstantPool } from "@angular/compiler";
import { Compiler_compileModuleSync__POST_R3__ } from "@angular/core/src/linker/compiler";

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
    this.getCount();
  }

  likeHandler() {
    this.isClicked = true;
    if (this.isClicked) this.count++;
    this.updateCounter();
    util.buttonToggle("noLike", false);
  }

  noLikeHandler() {
    this.isClicked = false;
    if (this.count === 0) util.buttonToggle("noLike", true);
    else this.count--;
    this.updateCounter();
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

  updateCounter() {
    this.counterService
      .postCounter(this.count)
      .subscribe(
        error => console.log(error)
      );
  }
}
