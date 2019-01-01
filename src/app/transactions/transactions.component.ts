import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client.model';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  client : Client;
  filteredClients : Client[];
  constructor() { }

  ngOnInit() {
  }

  filterClients(event:any) {
    let query : string = event.query;
  }

}
