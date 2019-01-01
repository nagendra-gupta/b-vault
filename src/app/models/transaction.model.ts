import { Client } from './client.model';
import { Item } from './item.model';

export interface Transaction {
  id: string;
  created : Date;
  client : Client;
  amount : number;
  debit : boolean;
  details : string;
  item : Item;
  quantity : number;
}
