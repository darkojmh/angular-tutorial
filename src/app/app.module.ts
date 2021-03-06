import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { BasketsComponent } from './baskets/baskets.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    BasketsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ServerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
