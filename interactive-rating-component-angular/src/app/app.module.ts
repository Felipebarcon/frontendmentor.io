// Modules

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppComponent } from './app.component';
import { RatingComponent } from './rating/rating.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ValidationComponent } from './validation/validation.component';
import { RouterModule } from '@angular/router';

// Routes
import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    RatingComponent,
    HighlightDirective,
    ValidationComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(APP_ROUTES)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
