import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Paginator} from '../../../../../../projects/ng-matt-tw-library/src';

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
  selector: 'app-pagination-table',
  templateUrl: './pagination-table.component.html',
  styleUrls: ['./pagination-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class PaginationTableComponent implements OnInit {

  paginator: Paginator<UserInterface>;

  constructor() {
  }

  ngOnInit(): void {
    const paginator = new Paginator<UserInterface>();
    paginator.createModelFn = (data: UserInterface) => new User(data.id, data.name);
    const users = [
      {id: 1, name: 'matt'},
      {id: 2, name: 'wayne'},
      {id: 3, name: 'allen'},
    ];
    paginator.setValue(1, 3, users);
    this.paginator = paginator;
    console.log(this.paginator.isNotEmpty());
  }

  changePage($event: number): void {
    console.log(`changePage : '${$event}'`);
  }
}
