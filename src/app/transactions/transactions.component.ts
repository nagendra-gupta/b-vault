import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client.model';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  selectedClient : Client;
  filteredClients : Client[];

  selectedItem : Item;
  filteredItems : Item[];

  quantity : string;
  rate : string;
  transactionDetail : string;
  debit:boolean;
  constructor() { }

  ngOnInit() {

  }

  filterClients(event:any) {
    let query : string = event.query;
  }

  filterItems(event:any) {
    let query : string = event.query;
  }

}
