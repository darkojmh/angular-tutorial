import { Component, Input, AfterViewInit } from '@angular/core';
import { ServerComponent } from '../app/server/server.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  constructor(private serverComponent: ServerComponent) { }

  onDanger() {
    console.log('danger: ' + this.serverStatus);
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
}
