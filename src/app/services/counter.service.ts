import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import "rxjs/Rx";

@Injectable({
  providedIn: "root"
})
export class CounterService {
  constructor(private http: Http) {}
  test = {
    afirca: {
      name: "Africa",
      code: "AF",
    },
    europe: {
      name: "Europe",
      code: "EU",
    },
    asia: {
      name: "Asia",
      code: "AS",
    },
    north_america: {
      name: "North America",
      code: "NA",
    },
    south_america: {
      name: "South America",
      code: "SA",
    },
    antarctica: {
      name: "Antarctica",
      code: "AN",
    },
    oceania: {
      name: "Oceania",
      code: "OC",
    }
  }
  getCounter() {
    return this.http
      .get("https://likes-b1d27.firebaseio.com/counter.json")
      };
  
      postCounter(counter:number) {
       return this.http.put("https://likes-b1d27.firebaseio.com/counter.json", counter);
        // return 77;
      }
      getContinents(){
        return this.http.get("https://likes-b1d27.firebaseio.com/continents.json");
      }
      putcontinent() {
        // return this.http.put("https://likes-b1d27.firebaseio.com/continents.json", this.test);
      }
      
  
}
