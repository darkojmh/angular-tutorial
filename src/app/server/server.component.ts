import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverID = 50;
  serverStatus = 'FUBAR';

  getServerStatus() {
    return this.serverStatus;
  }
}
