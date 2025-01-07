import { Component, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'TestComponent',
  templateUrl: './test.component.html',
})
export class TestComponent {
  count: WritableSignal<number> = signal(0);
  // count = 2
  
  change(number: number): number {
    console.log("number", number)
    this.count.set(number)
    // this.count = number
    return 1
  }
}
