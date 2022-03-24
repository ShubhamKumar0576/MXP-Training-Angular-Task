import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrls: ['./emi-calculator.component.css']
})
export class EmiCalculatorComponent implements OnInit {

  amount: any="";
  interest: any="";
  years: any="";
  loanAmount = 0;



  calcEmi(){

    let principal = this.amount;
    let CalculateInterest = this.interest / 100 / 12;
    let calculatedPayments = this.years * 12;
  
  
    let x = Math.pow(1 + CalculateInterest, calculatedPayments);
    let monthly = (principal * x * CalculateInterest) / (x - 1);
    let monthlyPayment = monthly;
  
    let totalInterest = (monthly * calculatedPayments - principal);
      
    return this.loanAmount = Math.round((monthly * calculatedPayments));
    
    

  }
  constructor() { }

  ngOnInit(): void {
  }

}
