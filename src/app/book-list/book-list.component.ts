import { Component, OnDestroy, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
import { Book } from '../modeles/book.model';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements  OnInit, OnDestroy {
  
  books: Book[];
  booksSubscription: Subscription;
  constructor(private bookService:BooksService, private router:Router) { }

  ngOnInit() {
  	this.booksSubscription = this.bookService.booksSubject.subscribe(
  			(books: Book[])=>{
  				this.books = books;
  			}
  		);
  	this.bookService.emitBooks();
  }

  onNewBook(){
  	this.router.navigate(['/books', 'new']);
  }

  onDeleteBook(book: Book){
  	this.bookService.removeBook(book);
  }
  onVewBook(id: number){
  	this.router.navigate(['/books', 'view', id]);
  }

  ngOnDestroy(){
  	this.booksSubscription.unsubscribe();
  }

}
