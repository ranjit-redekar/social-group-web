import { Component, OnInit, Input } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';


export interface Menu {
  name: string;
}

@Component({
  selector: 'app-add-lunch-or-dinner-menus',
  templateUrl: './add-lunch-or-dinner-menus.component.html',
  styleUrls: ['./add-lunch-or-dinner-menus.component.css']
})
export class AddLunchOrDinnerMenusComponent implements OnInit {
  @Input() foodTime: String;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];

  menus: Menu[] = [
  
  ];

  constructor() { }

  ngOnInit() {
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.menus.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: Menu): void {
    const index = this.menus.indexOf(fruit);

    if (index >= 0) {
      this.menus.splice(index, 1);
    }
  }
}
