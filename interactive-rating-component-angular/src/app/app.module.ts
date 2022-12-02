import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RatingComponent } from './rating/rating.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ValidationComponent } from './validation/validation.component';

@NgModule({
  declarations: [
    AppComponent,
    RatingComponent,
    HighlightDirective,
    ValidationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
