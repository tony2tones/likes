import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from "@angular/Forms"

// firebase modules

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
 
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { CounterService } from './services/counter.service';
import { FooterComponent } from './footer/footer.component';
import { AddCountryComponent } from './components/add-country/add-country.component';
import { ContinentSelectorComponent } from './components/continent-selector/continent-selector.component';
import { environment } from 'src/environments/environment';

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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
