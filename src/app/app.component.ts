import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-input-output';

  pizza = 0;
  totalItems = 0;

  constructor() {
    this.calculateTotalItems();
  }

  calculateTotalItems() {
    this.totalItems = this.pizza;
    console.warn("Total Items", this.totalItems);
  }

  pizzaChanged(count: number){
    this.pizza = count;
    this.calculateTotalItems()
  }

}
