import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from "@angular/Forms"
 
// Firebase
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { CounterService } from './services/counter.service';
import { HttpModule } from '@angular/http';
import { FooterComponent } from './footer/footer.component';
import { AddCountryComponent } from './components/add-country/add-country.component';
import { ContinentSelectorComponent } from './components/continent-selector/continent-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AddCountryComponent,
    ContinentSelectorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
