import { Component, OnInit , Input} from '@angular/core';
import {Transaction} from '../models/transaction.model';

@Component({
  selector: 'app-transaction-row',
  templateUrl: './transaction-row.component.html',
  styleUrls: ['./transaction-row.component.css']
})
export class TransactionRowComponent implements OnInit {

  @Input() transaction : Transaction;
  constructor() {
    this.transaction = new Transaction();
    this.transaction.amount = 1200.1;
    this.transaction.quantity = 1;
    this.transaction.rate = 1220;
    this.transaction.debit = true;
    this.transaction.item = {'id': 1 , 'name' : 'Test'};
    this.transaction.client = {'id': '1', 'name' : 'Test Client'};
  }

  ngOnInit() {
  }

}
