import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  user: any={}
  
  afterSubmit() {
    alert(JSON.stringify(this.user))  
  }


  constructor() { }

  ngOnInit(): void {
  }

}
