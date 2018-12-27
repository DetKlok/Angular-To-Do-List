import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ListManagingServiceService } from '../list-managing-service.service';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {

  task = new FormControl('');

  constructor(private listService: ListManagingServiceService) {}

  addNewTask(newTask) {
    this.listService.addTasks(newTask);
    this.task.reset();
  }

  removeTask(task) {
    console.log(task)
    // this.listService.removeTask(task);
  }

  ngOnInit() {
  }

}
