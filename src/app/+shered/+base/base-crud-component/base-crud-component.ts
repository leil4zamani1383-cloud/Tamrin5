import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'my-crud',
  imports: [],
  templateUrl: './base-crud-component.html',
  styleUrl: './base-crud-component.scss',
})
export class BaseCrudComponent {
 @Input() mystate:string='list';
 @Output()onCancel=new EventEmitter();
 @Output()onadd=new EventEmitter();
 @Input()columns:column[]=[];
}
export interface column{
  title:string;
  field:string;
}
