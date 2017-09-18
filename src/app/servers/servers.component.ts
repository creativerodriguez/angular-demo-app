import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  severCreationStatus = 'no server was created';
  constructor() {
	  //ES6 style anonymous function syntax
	  setTimeout(() => {
		  this.allowNewServer = true;
	  }, 2000);
   }

  ngOnInit() {
  }
  onCreateServer() {
	  
  }
}
