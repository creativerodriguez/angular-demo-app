import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  countries = ['United States','Sningapore','Hong Kong', 'Australia'];
  
  model = new User('','','');
  
  submitted = false;
  
  onSubmit() {
	  this.submitted = true;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
