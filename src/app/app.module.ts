import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Header/header.component';
import { CounterComponent } from './Components/Counter/counter.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, CounterComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
