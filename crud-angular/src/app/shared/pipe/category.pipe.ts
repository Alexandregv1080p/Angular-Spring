import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case"Front-End" : return ' code icon'
      case"Back-End" : return 'computer'
    }
    return 'code icon';
  }

}
