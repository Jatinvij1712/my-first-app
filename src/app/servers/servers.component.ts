import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector:'[app-servers]',
  //selector:'.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
   allowNewServer = false;
   ServerCreationStatus = 'No server was created!';
   serverName="TestServer";
   serverCreated = false;
   servers = ['Testserver','Testserver 2'];

  constructor() { 
   setTimeout(() => {
   this.allowNewServer = true;
   },2000);

  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated=true;
    this.ServerCreationStatus = "Sever was Created! Name is " + this.serverName;
    this.servers.push(this.serverName);
  }
  onUpdateServerName(event:Event){
   //console.log(event);
   this.serverName=(<HTMLInputElement>event.target).value;
  }
}
