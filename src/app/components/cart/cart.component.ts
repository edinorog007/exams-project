import { Component } from '@angular/core';
import {Book} from "../../types/book.type";

@Component({
  selector: 'cart-component',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  public books: Book[] = [];
  public totalCost:number = 0;
  constructor() {
    this.getLocalStorage();
    if (this.books) {
      this.sumCost();
    }
  }
  private getLocalStorage() {
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      this.books.push(JSON.parse(localStorage.getItem(key as string) as string));
    }
  }

  private sumCost():void {
    for (let i = 0; i < this.books.length; i++) {
      this.totalCost += this.books[i].amount;
    }
  }
}
