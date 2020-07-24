import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import "rxjs/Rx";

@Injectable({
  providedIn: "root"
})
export class CounterService {
  constructor(private http: Http) {}
  test = {
    name: "Africa",
    code: "AF",
  }
  getCounter() {
    return this.http
      .get("https://likes-b1d27.firebaseio.com/counter.json")
      };
  
      postCounter(counter:number) {
       return this.http.put("https://likes-b1d27.firebaseio.com/counte.json", counter);
        // return 77;
      }
      getContinent(){
        // return this.http.get();
      }
      putcontinent() {
        return this.http.put("https://likes-b1d27.firebaseio.com/continen.json", this.test);
      }
      
  
}
