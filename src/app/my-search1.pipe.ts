import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mySearch1'
})
export class MySearch1Pipe implements PipeTransform {

  transform(items: any[], field: string, value: string): any[] {

    if (!items) {
      return [];
    }
    else if (!field) {
      return [];
    }
    else if (!value) {
      return items;
    }
    return items.filter(singleItem => singleItem[field]?.toLowerCase().includes(value.toLowerCase())) ?? [];
  }
}
