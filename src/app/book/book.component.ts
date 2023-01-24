import {Component, Input, OnDestroy} from '@angular/core';
import {CartService} from "../services/cart.service";
import {Book} from "../types/Books";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnDestroy{
  isInCart: boolean = false;

  constructor(private cartService: CartService) {
  }

  ngOnDestroy(): void {
    console.log({destroy: 'on des'})
  }

  @Input() book: Book = {} as Book;

  addToCart() {
    this.isInCart = true
    this.cartService.add(this.book);
  }
  removeFromCart() {
    this.isInCart = false
    this.cartService.remove(this.book);
  }



}
