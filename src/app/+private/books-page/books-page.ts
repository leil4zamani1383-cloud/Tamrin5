import { Component, inject, OnInit } from '@angular/core';
import { BooksService } from './books-service';
import { FormsModule } from '@angular/forms';
import { thing } from '../../+shered/+base/base-thinh';
import { BaseCrudPage } from '../../+shered/+base/base-crud-page';
import {
  BaseCrudComponent,
  column,
} from '../../+shered/+base/base-crud-component/base-crud-component';
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
    {
      this.item = {
        title: '',
        publisher: '',
        writer: '',
        
      };
    }
  }
  override dataServisce = inject(BooksService);
  override addPrepair(): void {
    this.item = {
      title: '',
      publisher: '',
      writer: '',
    };
  }
  booksColumns: column[] = [
    { field: 'id', title: 'شناسه' },
    { field: 'title', title: 'عنوان' },
    { field: 'writer', title: 'نویسنده' },
    { field: 'publisher', title: 'ناشر' },
    { field: 'price', title: 'قیمت' },
  ];
}
export interface BooksItem extends thing {
  title: string;
  writer: string;
  publisher: string;
  price?: number;
}
