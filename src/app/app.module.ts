import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    // autres composants
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
