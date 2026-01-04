import { Component, inject, OnInit } from '@angular/core';
import { BooksService } from './books-service';
import { FormsModule } from '@angular/forms';
import { thing } from '../../+shered/+base/base-thinh';
import { BaseCrudPage } from '../../+shered/+base/base-crud-page';
import { BaseCrudComponent, colum } from "../../+shered/+base/base-crud-component/base-crud-component";
import { Field } from '@angular/forms/signals';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-books-page',
  imports: [FormsModule, BaseCrudComponent],
  templateUrl: './books-page.html',
  styleUrl: './books-page.scss',
})
export class BooksPage extends BaseCrudPage<BooksItem> implements OnInit {
  ngOnInit(): void {
    this.dataRefresh();
  }
   override dataServisce = inject(BooksService);
   override addPrepair(): void {
     this.item={
      title:'',
      publisher:'',
      writer:'',
     }
   }
   booksColumns:colum[]=[
     {Field:'id',Title:'شناسه'},
     {Field:'titel',Title:'عنوان'},
     {Field:'writer',Title:'نویسنده'},
     {Field:'publisher',Title:'ناشر'},
     {Field:'price',Title:'قیمت'},
    ]
   
}
export interface BooksItem extends thing { 
  title: string;
  writer: string;
  publisher: string;
  price?: number;
}
