import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root"
})
export class ToastMessageService {
  constructor(private toastr: ToastrService) {}

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
      case 14:
        text = "I am overwhelmed by your clickiness";
        break;
        case 16:
        text = "You may have a click problem";
        break;
        case 17:
        text = "Go on give it another click!";
        break;
        case 20:
        text = "Go on give it another click!";
        break;
        case 22:
        text = "Go on give it another click!";
        break;
      case 30:
        text =
          "I had no idea you were going to be clicking the like button so much";
        break;
      case 50:
        text =
          "Congrats you've reached all the switch cases i've bothered to cater for, 50 clickers";
        break;
      default:
        text = "Thank you very much";
    }
    this.toastr.success(text, "Notification");
  }

  showFailure(counter: number) {
    let text: string;
    switch (counter) {
      case -1:
        text = "Whatever";
        break;
      case -5:
        text = "Ok sure thats fine";
        break;
      case -10:
        text = "You really don't like this component";
        break;
        case -14:
        text = "You are a very negative person";
        break;
        case -17:
        text = "You are STILL pretty negative";
        break;
        case -20:
        text = "You are making me sad now :(";
        break;
        case -25:
        text = "FIINE!!!";
        break;
        case -30:
        text = "I have nothing more to say";
        break;
      case -31:
        text = "I like to think that you have made your point now";
        break;
      case -40:
        text =
          "I had no idea you were going to be clicking the no likes button so much";
        break;
      case -50:
        text =
          "Congrats you've reached all the switch cases i've bothered to cater for, -50 clickers";
        break;
      default:
        text = "Thank you for your input";
    }
    this.toastr.error(text, "Notification");
  }
}
