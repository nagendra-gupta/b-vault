import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-clients',
  templateUrl: './top-clients.component.html',
  styleUrls: ['./top-clients.component.css']
})
export class TopClientsComponent implements OnInit {

  data: any;
  constructor() {

    this.data = {
              labels: ['A','B','C','D','E'],
              datasets: [
                  {
                      data: [300, 50, 100,150,130],
                      backgroundColor: [
                          "#FF6384",
                          "#36A2EB",
                          "#FFCE56",
                          "#EC21EE",
                          "#BBCE56"
                      ],
                      hoverBackgroundColor: [
                          "#FF6384",
                          "#36A2EB",
                          "#FFCE56",
                          "#EC21EE",
                            "#BBCE56"
                      ]
                  }]
               };
  }

  ngOnInit() {
  }

}
