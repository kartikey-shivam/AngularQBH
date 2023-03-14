import { Component, OnInit } from '@angular/core';
import { Client } from '../../Client';

@Component({
  selector: 'app-clients',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientsComponent implements OnInit {
  localItem: string;
  clients: Client[];
  constructor() {
    this.localItem = localStorage.getItem('clients');
    if (this.localItem == null) {
      this.clients = [];
    } else {
      this.clients = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {}

  deleteClient(client: Client) {
    console.log(client);
    const index = this.clients.indexOf(client);
    this.clients.splice(index, 1);
    localStorage.setItem('clients', JSON.stringify(this.clients));
  }
  addClient(client: Client) {
    console.log(client);
    this.clients.push(client);
    localStorage.setItem('clients', JSON.stringify(this.clients));
  }
  // toggleclient(client: Client) {
  //   const index = this.clients.indexOf(client);
  //   console.log(index);
  //   this.clients[index].active = !this.clients[index].active;
  //   localStorage.setItem('clients', JSON.stringify(this.clients));

  //   console.log(client);
  // }
}
