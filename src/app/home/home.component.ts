import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: MenuItem[];

  visibleDashboard: boolean;

  visibleTransactions: boolean;

  visibleSettings: boolean;

  constructor() { this.visibleDashboard = true; }

  ngOnInit() {
    this.items = [
            {id: 'dashboard', label: '', icon: 'fa fa-fw fa-bar-chart', command: (event) => {
                    //event.originalEvent: Browser event
                    //event.item: menuitem metadata
                    this.visibleDashboard = true;
                    this.visibleSettings = false;
                    this.visibleTransactions = false;
                }},
                {id: 'transactions', label: '', icon: 'pi pi-dollar', command: (event) => {
                      this.visibleDashboard = false;
                      this.visibleSettings = false;
                      this.visibleTransactions = true;
                    }},
                    {  id: 'settings', label: '', icon: 'pi pi-cog', command: (event) => {
                      this.visibleDashboard = false;
                      this.visibleSettings = true;
                      this.visibleTransactions = false;
                    }
                }
        ];
  }

}
