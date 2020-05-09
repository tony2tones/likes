import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { CounterService } from './services/counter.service';
import { HttpModule } from '@angular/http';
import { FooterComponent } from './footer/footer.component';
import { AddCountryComponent } from './components/add-country/add-country.component';
import { CountrySelectorComponent } from './components/country-selector/country-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AddCountryComponent,
    CountrySelectorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    
    ToastrModule.forRoot()
  ],
  providers: [CounterService, AddCountryComponent,],
  bootstrap: [AppComponent]
})
export class AppModule { }
