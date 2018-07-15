import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
      .online {
        color: #FFF;
      }
    `]
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  gestServerStatus(){
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? '#208738' : '#e8aeae';
  }
}
