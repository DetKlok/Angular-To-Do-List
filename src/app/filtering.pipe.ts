import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtering',
  pure: false
})
export class FilteringPipe implements PipeTransform {

  transform(items, status) {
    let doneTasks = [];
    let unDoneTasks = [];

    items.forEach(function(item){
      item.isDone ? doneTasks.push(item) : unDoneTasks.push(item);
    });

    if (status == 'all') {
      return items
    } else if (status == 'done') {
      return doneTasks
    } else if (status == 'undone') {
      return unDoneTasks
    }
  }

}
