import { Component, OnInit } from '@angular/core';
import {Subject } from 'rxjs';
import {Transaction } from '../models/transaction.model';

@Component({
  selector: 'app-top-transactions',
  templateUrl: './top-transactions.component.html',
  styleUrls: ['./top-transactions.component.css']
})
export class TopTransactionsComponent implements OnInit {
transactions : Subject<Transaction>;
  constructor() { }

  ngOnInit() {
  }

}
