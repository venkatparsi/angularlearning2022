import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus: string;
  serverName: any;
  serverCreated: true;
  servers = ['TestServer','TestServer 2','TestServer 3'];

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    },2000)
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created!';
    this.serverCreated = true;
  }
  onUpdateServerName(event:any){
    console.log(event);
    this.serverName = event.target.value;
  }

}
