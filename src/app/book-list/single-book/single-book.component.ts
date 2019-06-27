import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Book } from '../../modeles/book.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.scss']
})
export class SingleBookComponent implements OnInit {

  book: Book;
  constructor(private booksService:BooksService,
  			  private route:ActivatedRoute,
  			  private router: Router) { }

  ngOnInit() {
  	this.book = new Book('','');
  	const id = this.route.snapshot.params['id'];
  	this.booksService.getSingleBook(id).then(
  			(book: Book)=>{
  				this.book = book;
  			}
  		);
  }

  onBack(){
  	this.router.navigate(['/books']);
  }

}
