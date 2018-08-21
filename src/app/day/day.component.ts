import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnChanges {
  @Input() dayName: String;

  dayObject: Object = {
    'name': '',
    'time': '',
  }
  constructor() { }

  ngOnChanges() {

    console.log("AAAAAAAAAAA");
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
    console.log(this.step, "STEPS");
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
