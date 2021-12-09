import { Component } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  public counter: number = 0;
  changeCounter = (amount: number) => (this.counter += amount);
}
