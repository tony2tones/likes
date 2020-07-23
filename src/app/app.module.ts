import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from "@angular/Forms"
 
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
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
    ToastrModule.forRoot()
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
