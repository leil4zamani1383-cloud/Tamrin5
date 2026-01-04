import { inject } from '@angular/core';
import { thing } from './base-thinh';
import { BaseService } from './base-service';

export class BaseCrudPage<t extends thing> {
  save() {
    if (this.state == 'add') {
      this.dataServisce.add(this.item);
    } else if (this.state == 'edit') {
      this.dataServisce.edit(this.item);
    } else if (this.state == 'remove') {
      this.dataServisce.remove(this.item);
    }
    this.dataRefresh();
    this.state = 'list';
  }
  //   ngOnInit(): void {
  //     this.dataRefresh();
  //   }
  data: t[] = [];
  item!: t;
  dataServisce!: BaseService<t>;
  state: string = 'list';
  dataRefresh() {
    this.data = this.dataServisce.list();
  }
  add() {
    this.state = 'add';
    this.addPrepair();
  }
  addPrepair() {}
  edit(book: t) {
    this.item = { ...book };
    this.state = 'edit';
  }
  remove(book: t) {
    this.item = { ...book };
    this.state = 'remove';
  }
  cancel() {
    this.state = 'list';
  }
}
