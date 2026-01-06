import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ɵEmptyOutletComponent } from "@angular/router";
import { Field } from "@angular/forms/signals";

@Component({
  selector: 'my-crud',
  imports: [FormsModule],
    // , ɵEmptyOutletComponent],
  templateUrl: './base-crud-component.html',
  styleUrl: './base-crud-component.scss',
})
export class BaseCrudComponent {
 @Input() mystate:string='list';
 @Input()columns:column[]=[];
  @Input()mydata:any[]=[];
 @Output()onCancel=new EventEmitter();
 @Output()onAdd=new EventEmitter();
 @Output() onEdit=new EventEmitter<any>;
 @Output() onRemove=new EventEmitter<any>;
 @Output() onSave=new EventEmitter; 
}

export interface column{
  title:string;
  field:string;
}
