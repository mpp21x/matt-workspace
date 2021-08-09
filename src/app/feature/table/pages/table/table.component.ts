import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  items: { id: number, name: string }[] = [
    {id: 1, name: 'wanye'},
    {id: 2, name: 'matt'},
    {id: 3, name: 'allen'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  search(): void {
    console.log('searchz');
  }
}
