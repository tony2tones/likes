import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { CounterService } from './services/counter.service';
import { HttpModule } from '@angular/http';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { AddCountryComponent } from './components/add-country/add-country.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    FooterComponent,
    AddCountryComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
