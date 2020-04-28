import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TaskModel} from '../../../models/TaskModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngForms';
  form: FormGroup;
  id = 0;
  tasks: TaskModel[] = [];

  addTask(form: FormGroup) {
    this.tasks.push({title: form.value.title, body: form.value.body, type: form.value.type, id: this.id++});
  }

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      type: 'urgent'
    });
  }
}
