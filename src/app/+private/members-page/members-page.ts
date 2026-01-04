import { Component, inject, OnInit } from '@angular/core';
import { MembersService } from './members-service';
import { FormsModule } from '@angular/forms';
import { thing } from '../../+shered/+base/base-thinh';
import { BaseCrudPage } from '../../+shered/+base/base-crud-page';
import { BaseService } from '../../+shered/+base/base-service';
import { BaseCrudComponent } from "../../+shered/+base/base-crud-component/base-crud-component";

@Component({
  selector: 'app-members-page',
  imports: [FormsModule, BaseCrudComponent],
  templateUrl: './members-page.html',
  styleUrl: './members-page.scss',
})
export class MembersPage extends BaseCrudPage<MemberItem> implements OnInit {
  ngOnInit(): void {
  this.dataRefresh();
  }
 override dataServisce=inject(MembersService);
 override addPrepair(): void {
   this.item={
    Fullname:'',
    address:'',
    mobile:'',
   }
 }
}
export interface MemberItem extends thing {
  Fullname: string;
  mobile: string;
  address: string;
}
