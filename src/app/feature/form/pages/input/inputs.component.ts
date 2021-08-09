import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {
  form: FormGroup;


  constructor() {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('matt', [Validators.required]),
    });
    this.form.get('name');
  }

}
