import { thing } from './base-thinh';

export class BaseService<t extends thing> {
  protected data:t[] = [];
  list(){
    return [...this.data];
  }
  add(item:t) {
    this.data.push(item);
  }
  edit(item:t) {
    const index =this.data.findIndex(b=>b.id==item.id);
    if (index!=-1) {
      this.update(this.data[index], item);
    }
  }
  remove(item:t) {
    this.data = this.data.filter(b=>b.id!=item.id);
  }
  update(destination: t, source: t) {}
}
