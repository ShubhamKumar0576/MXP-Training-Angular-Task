import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { BankingComponent } from './banking/banking.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';
import { routes } from './routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    BankingComponent,
    CreditCardComponent,
    EmiCalculatorComponent
  ],
  imports: [
    BrowserModule , FormsModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
