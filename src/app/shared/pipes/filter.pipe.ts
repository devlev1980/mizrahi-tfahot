import { Pipe, PipeTransform } from '@angular/core';
import { Dog } from '../../features/home/models/dog-kind';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(value: Dog): any[] {
    return Object.values(value).filter((item) => item.value.length === 0);
  }
}
