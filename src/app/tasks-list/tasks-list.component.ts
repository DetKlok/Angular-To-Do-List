import { Component, OnInit } from '@angular/core';
import { ListManagingServiceService } from '../list-managing-service.service';


@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {

    tasksList = [];
    doneStatus = 'all';


  constructor(private listService: ListManagingServiceService) {
      this.tasksList = listService.getTasks();
  }

  countDone() {
    let counter = 0;

    this.tasksList.forEach(function(item){
      item.isDone ? counter++ : null;
    });

    return counter;
  }

  filterList(status) {
    this.doneStatus = status;
  }

  removeTask(removingTask) {
    this.listService.removeTask(removingTask);
  }

  toggle(currentTask) {
    this.listService.toggleTaskState(currentTask);
  }

  ngOnInit() {
  }

}
