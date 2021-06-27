import { Component } from '@angular/core';

//decorator should be imported then passing a javascript object with infos which be stored as a meta data
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'running';

  getServerStatus() {
    return this.serverStatus;
  }
}
