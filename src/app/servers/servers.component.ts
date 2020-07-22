import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServers = false;
  ServerCreationStatus = 'No server was created';
  serverName = 'TestServer';

  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    }, 2000);

  }

  ngOnInit() {
  }

  onCreateServer() {
    this.ServerCreationStatus = 'Server was created! Name is: ' + this.serverName;

  }

  onUpdateServerName(event: Event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }
}
