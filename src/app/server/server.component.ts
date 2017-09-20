import { Component } from '@angular/core';

@Component ({
	selector: 'app-server',
	templateUrl: './server.component.html',
	styles: [`
		.online {
			border: solid 1px green;
		}	
	`]
})
export class ServerComponent {
	serverId  = Math.random() * (Math.floor(100) - Math.ceil(1) + 1) + Math.ceil(1);
	serverStatus = 'offline';
	
	constructor() {
		this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
	}
	
	getServerStatus() {
		return this.serverStatus;
	}
	
	getColor() {
		return this.serverStatus === 'online' ? 'green' : 'red';
	}
}