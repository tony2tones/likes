import { Injectable } from "@angular/core";

import { AngularFirestore } from 'angularfire2/firestore';
import { Counter } from '../components/model/data.models';

@Injectable({
  providedIn: "root"
})
export class CounterService {
  constructor(private firestore: AngularFirestore ) {}
  // this.afAuth.auth.signInAnonymously();
  // this._db = firestore;
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

  counterDoc: any;

  getCounter() {
    this.counterDoc = this.firestore.doc<Counter>('counter/1');
    return this.counterDoc = this.counterDoc.valueChanges();
}
  
      putCountinents(counter:number) {
        this.firestore.doc('counter/').update(counter);
        // return 77;
      }
      getContinents(){
        return this.firestore.collection('continents').snapshotChanges();        
        // return this.http.get("https://likes-b1d27.firebaseio.com/continents.json");
      }
      addContinent(newContinent) {
        return this.firestore.collection('continents').add(newContinent);
        // return this.http.put("https://likes-b1d27.firebaseio.com/continents.json", this.test);
      }
  
}


// create_NewStudent(record) {
      //   return this.firestore.collection('Students').add(record);
      // }
    
      // read_Students() {
      //   return this.firestore.collection('Students').snapshotChanges();
      // }
    
      // update_Student(recordID,record){
      //   this.firestore.doc('Students/' + recordID).update(record);
      // }
    
      // delete_Student(record_id) {
      //   this.firestore.doc('Students/' + record_id).delete();
      // }
