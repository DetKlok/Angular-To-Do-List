import { Component, OnInit } from '@angular/core';
import { ListManagingServiceService } from '../list-managing-service.service';


@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {

    tasksList = [];


  constructor(private listService: ListManagingServiceService) {
      this.tasksList = listService.getTasks();
  }

  removeTask(removingTask) {
    this.listService.removeTask(removingTask);
  }

  ngOnInit() {
  }

}
