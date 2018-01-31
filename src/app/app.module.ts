import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DataService } from './Services/DataService';
import { HttpClientModule, HttpClient  } from '@angular/common/http';
import { Configuration } from '../app.constants';


@NgModule({
  declarations: [
    AppComponent  
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [Configuration ,HttpClientModule, DataService],
  bootstrap: [AppComponent ]
})
export class AppModule { }
