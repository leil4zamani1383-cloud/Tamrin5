import { Injectable } from '@angular/core';
import { BooksItem } from './books-page';
import { BaseService } from '../../+shered/+base/base-service';

@Injectable({
  providedIn: 'root',
})
export class BooksService extends BaseService<BooksItem> {
  override data: BooksItem[] = [
    { id: 1, title: 'c++', writer: 'خودم', publisher: 'خودش', price: 8000 },
    { id: 2, title: 'برنامه نویسی', writer: 'خودت', publisher: 'خودش', price: 9000 },
    { id: 3, title: 'پایگاه داده', writer: 'خودشان', publisher: 'خودش', price: 18000 },
    { id: 4, title: 'طراحی وب', writer: 'خودمان', publisher: 'خودش', price: 6000 },
    { id: 5, title: 'مدار منطقی', writer: 'خودم', publisher: 'خودش', price: 7000 },
  ];
  override update(destination: BooksItem, source: BooksItem): void {
    destination.title = source.title;
    destination.writer = source.writer;
    destination.publisher = source.publisher;
    destination.price = source.price;
  }
}
