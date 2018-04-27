import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, CheckboxDirective, FirstDirective } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from 'angular2-select';

@NgModule({
  declarations: [
    AppComponent,
    FirstDirective,
    HighlightDirective,
    CheckboxDirective
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    ReactiveFormsModule,
    SelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
