import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RatingComponent } from './rating/rating.component';
import { FoodTypeComponent } from './food-type/food-type.component';
import { PaymentComponent } from './payment/payment.component';
import { SearchComponent } from './search/search.component';

import { AlgoliaService } from './services/algolia.service';

@NgModule({
  declarations: [
    AppComponent,
    RatingComponent,
    FoodTypeComponent,
    PaymentComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [
    AlgoliaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
