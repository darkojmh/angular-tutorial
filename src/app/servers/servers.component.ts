import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServers = false;
  ServerCreationStatus = 'No server was created';
  serverName = 'TestServer';
  serverCreated = false;
  @Input() serverStatus: string;

  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    }, 2000);

  }

  ngOnInit() {

  }

  onCreateServer() {
    this.ServerCreationStatus = `Server was created! Name is: ${this.serverName}`;
    this.serverCreated = true;

  }

  onUpdateServerName(event: Event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }
}
