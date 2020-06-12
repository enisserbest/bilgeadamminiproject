import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../Models/login';

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {
  
  transform(value: User[], filterText?: string): User[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : null;
    return filterText ? value.filter((p: User) =>
      p.firstName.toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }
}
