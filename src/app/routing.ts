import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BankingComponent } from './banking/banking.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';
import { FormComponent } from './form/form.component';
import { Component } from '@angular/core';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'form', component: FormComponent },
    { path: 'banking', component: BankingComponent },
    { path: 'credit-card', component: CreditCardComponent},
    { path: 'emi-calculator', component: EmiCalculatorComponent},


];