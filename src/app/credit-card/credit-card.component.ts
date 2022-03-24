import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

  salary: any='';
  getStatus: string='';

  status(){
    if(this.salary < 20000){
      this.getStatus= "Sorry you are not eligible for any card "
    }
    else if(this.salary >= 20000 && this.salary <30000){
      this.getStatus = "You are eligible for Silver card"
    }
    else if(this.salary >= 30000 && this.salary <40000){
      this.getStatus = "You are eligible for Gold card"
    }
    else{
      this.getStatus = "You are eligible for Platinum card"
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
