import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import "rxjs/Rx";

@Injectable({
  providedIn: "root"
})
export class CounterService {
  constructor(private http: Http) {}
  getCounter() {
    return this.http
      .get("https://likes-b1d27.firebaseio.com/counte.json")
      };
  
      postCounter(counter:number) {
       return this.http.put("https://likes-b1d27.firebaseio.com/counte.json", counter);
        // return 77;
      }
  
}
