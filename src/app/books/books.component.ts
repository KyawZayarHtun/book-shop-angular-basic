import {Component, OnInit} from '@angular/core';
import {BooksService} from "./books.service";
import {Book} from "../types/Books";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{

  books: Book[] = [];

  constructor(private bookService: BooksService) {

  }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

  name: string = "Java";
  author: string = "Michel";
  myName: string = "dfsa";

  isShowing: boolean = true;

  clicking() {
    this.isShowing = !this.isShowing;
  }

  handleInput(event: any) {
    this.myName = event.target.value;
  }


}
