import { Component, inject, OnInit } from '@angular/core';
import { BooksService } from './books-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-books-page',
  imports: [FormsModule],
  templateUrl: './books-page.html',
  styleUrl: './books-page.scss',
})
export class BooksPage implements OnInit {
  save() {
       this.booksServisce.add(this.item);
   this.dataRefresh();
   this.state='list';
     
  }
  ngOnInit(): void {
    this.dataRefresh();
  }
  data: BooksItem[] = [];
  item:BooksItem={
    id:0,title:'',
    writer:'',
    price:0,
    publisher:''
  };
  booksServisce = inject(BooksService);
  state:string='list';
  dataRefresh() {
    this.data = this.booksServisce.list();
  }
  add() {
    this.state='add';
  }
  cancel(){
    this.state='list';
  }
}
export interface BooksItem {
  id: number;
  title: string;
  writer: string;
  publisher: string;
  price: number;
}
