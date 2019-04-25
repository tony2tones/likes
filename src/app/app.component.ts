import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'likes';
  isClicked: boolean = false;
  count = 0;

  clickHandler() {
     this.isClicked = !this.isClicked;
     console.log('the heart has been clicked', this.isClicked);
  }
}
