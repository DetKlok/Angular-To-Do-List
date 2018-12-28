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

  removeTask(taskIndex) {
    defaultTasksList.splice(taskIndex, 1);
    this.getTasks();
  }

  toggleTaskState(currentTask) {
    currentTask.isDone = !currentTask.isDone;
    this.getTasks();
  }
}
