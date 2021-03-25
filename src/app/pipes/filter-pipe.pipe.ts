
import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Product[], filterText: string): Product[] { //value: Değiştirmek istediğimiz data. arg : paramaetre.
    filterText = filterText?filterText.toLocaleLowerCase():"" //girilen değeriküçük harfe çeviriyoruz.  
    return filterText?value.filter
    ((p:Product)=>p.productName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }
}