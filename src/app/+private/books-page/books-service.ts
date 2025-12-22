import { Injectable } from '@angular/core';
import { BooksItem } from './books-page';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
   private data: BooksItem[] = [
      { id: 1, title: 'c++', writer: 'خودم', publisher: 'خودش', price: 8000 },
      { id: 2, title: 'برنامه نویسی ', writer: 'خودت', publisher: 'خودش', price: 9000 },
      { id: 3, title: 'پایگاه داده', writer: 'خودشان', publisher: 'خودش', price: 18000 },
      { id: 4, title: 'طراحی وب', writer: 'خودمان', publisher: 'خودش', price: 6000 },
      { id: 5, title: 'مدار منطقی', writer: 'خودم', publisher: 'خودش', price: 7000 },
    ];
    list(){
      return[ ...this.data];
    }
    add(item:BooksItem){
  this.data.push(item);
    }
}
