import { Injectable } from '@angular/core';
import { MemberItem } from './members-page';
import { BaseService } from '../../+shered/+base/base-service';

@Injectable({
  providedIn: 'root',
})
export class MembersService  extends BaseService<MemberItem>{
  override data: MemberItem[] = [
    {
      id: 1,
      Fullname:'لیلازمانی',
      mobile: '09185456452',
      address: 'همدان',
    },
    {
      id: 2,
      Fullname: 'فرشته قصبستانی',
    mobile: '09188965404',
      address: 'همدان',
    },
    {
      id: 3,
      Fullname: 'زینب رمضانی',
      mobile: '09181111111',
      address: 'تهران',
    },
    {
      id: 4,
      Fullname: 'نازنین مسلمی',
      mobile: '09182222222',
      address: 'اصفهان',
    },
    {
      id: 5,
      Fullname: 'پریا مومیوند',
      mobile: '09180000000',
      address:'اسدآباد' ,
    },
  ];
  override update(destination: MemberItem, source: MemberItem): void {
    destination.Fullname=source.Fullname;
    destination.mobile=source.mobile;
    destination.address=source.address;
  }
}
