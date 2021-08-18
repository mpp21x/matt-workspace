import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { SelectOption } from 'ng-matt-tw-library';
import {of} from 'rxjs';
import {filter, tap} from 'rxjs/operators';



@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {
  form: FormGroup;
  options: SelectOption<string>[] = [
    {text: 'matt', value: 'matt'},
    {text: 'wayne', value: 'wayne'},
    {text: 'allen', value: '1'},
  ];


  constructor() {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('matt', [Validators.required]),
      users: new FormControl(['matt'], [Validators.required]),
    });
    this.form.get('name');


    console.log(of(true)
      .pipe(
        tap((t) => {
          console.log(`ct: ${t}`);
        }),
        filter((result) => result)
      )
      .subscribe((result) => console.log(`result: ${result}`)));
  }

}
