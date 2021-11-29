import {Component, OnInit} from '@angular/core';
import {Paginator} from 'ng-matt-tw-library';

interface UserInterface {
  id: number;
  name: string;
}

class User {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

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
  paginator;

  constructor() {
  }

  ngOnInit(): void {
    const paginator = new Paginator<UserInterface>();

    const users = [
      {id: 1, name: 'matt'},
      {id: 2, name: 'wayne'},
      {id: 3, name: 'allen'},
    ];
    paginator.setValue(
      1,
      3,
      users.map((data: UserInterface) => new User(data.id, data.name))
    );
    this.paginator = paginator;
  }

  search(): void {
    console.log('search');
  }

  changePage($event: number): void {
    console.log(`changePage : '${$event}'`);
  }
}
