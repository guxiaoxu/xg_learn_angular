import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'no server created';
  serverCreated = 0;
  serverName = 'Default';

  constructor() {
    this.reverse();
  }

  reverse() {
    setTimeout(() => {
      this.allowNewServer = !this.allowNewServer;
      //this.reverse();
    }, 2000);
  }

  ngOnInit() {
  }

  onCreationServer() {
    this.serverCreated++;
    this.serverCreationStatus = this.serverCreated + ' server(s) created.';
  }

  hasServerCreated() {
    return !(this.serverCreated === 0);
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

}
