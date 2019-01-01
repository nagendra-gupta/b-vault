import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-debtors',
  templateUrl: './top-debtors.component.html',
  styleUrls: ['./top-debtors.component.css']
})
export class TopDebtorsComponent implements OnInit {

  data : any;
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
