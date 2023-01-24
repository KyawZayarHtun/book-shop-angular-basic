import { Injectable } from '@angular/core';
import {Book} from "../types/Books";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }
  books :Book[] = [
    {
      name: 'Clean Code',
      author: 'David Lorel',
      image: 'https://picsum.photos/200/210',
      price: 200
    },
    {
      name: 'Programming Java',
      author: 'Jack barman',
      image: 'https://picsum.photos/200/211',
      price: 359.99
    },
    {
      name: 'Programming mysql',
      author: 'Sql fighter',
      image: 'https://picsum.photos/200/212',
      price: 120
    }
  ]
  getBooks() {
    return this.books;
  }

}
