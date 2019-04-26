import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import "rxjs/Rx";

@Injectable({
  providedIn: "root"
})
export class CounterService {
  constructor(private http: Http) {}
  getCounter() {
    return this.http
      .get("https://likes-b1d27.firebaseio.com/counter/data.json").
      (response: Response) => {
        const data = response.json();
        return data;
      })
      // .map(
      //   (response: Response) => {
      //   const number = response.json();
      //   console.log('this is the current count ',number);
      //   return number;
      // });
  }
}
