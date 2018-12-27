import { Injectable } from '@angular/core';
import { defaultTasksList } from './tasks-list';

@Injectable({
  providedIn: 'root'
})
export class ListManagingServiceService {

  constructor() { }

  getTasks() {
    return defaultTasksList;
  }

  addTasks(newTaskName) {
      let newTask = {
          taskName: newTaskName,
          isDone: false
      };
      defaultTasksList.push(newTask);
      this.getTasks();
  }

  removeTask(rmTask) {
    // let thisTask = rmTask.indexOf(defaultTasksList);
    console.log(rmTask);
    // console.log(thisTask);
    // defaultTasksList.splice(task);
    this.getTasks();
  }
}
