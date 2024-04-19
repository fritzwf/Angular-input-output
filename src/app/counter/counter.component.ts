import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  @Input() name: string = '';
  @Input() value: number = 0;
  @Output() changed = new EventEmitter<number>();

  inc() {
    this.value = this.value + 1;
    this.changed.emit(this.value);
    console.warn("increment:", this.value);
  }

  dec() {
    this.value = this.value - 1 < 0 ? 0 : this.value - 1;
    this.changed.emit(this.value);
    console.warn("decrement:", this.value);
  }
}
