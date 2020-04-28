import {Component, Input, OnInit} from '@angular/core';
import {TaskModel} from '../../../models/TaskModel';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements OnInit {

  @Input()
  tasks: TaskModel[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
