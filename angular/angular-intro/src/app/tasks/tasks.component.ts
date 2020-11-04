import { Component, OnInit } from '@angular/core';
import {Task} from '../shared/task.class';
import {element} from 'protractor';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  isCompleted = false;
  counter = 0;
  completed = 0;
  checkBoxes;
  constructor() { }
  addTask(event): void{
    this.tasks.push(new Task(this.counter++, this.isCompleted , event.target.value));
    event.target.value = '';
  }
  completeDecompleteOne(task: Task): void{
    task.isCompleted = !task.isCompleted;
    this.tasks.forEach(taskConsole => console.log(`${taskConsole.id}`, taskConsole.isCompleted));
  }
  completeDecompleteAll(): void{
    this.checkBoxes = document.getElementsByClassName('checkbox');
    this.calcCompleted();
    if (this.completed === this.tasks.length){
      console.log('if');
      this.tasks.forEach(task => {
        task.isCompleted = false;
      });
      [].forEach.call(this.checkBoxes, checkbox => checkbox.checked = false);
    } else {
      console.log('else');
      this.tasks.forEach(task => task.isCompleted = true);
      [].forEach.call(this.checkBoxes, checkbox => checkbox.checked = true);
    }
  }
  deleteOne(taskToDelete: Task): void {
    const index = this.tasks.indexOf(taskToDelete, 0);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }
  deleteAll(): void {
    this.tasks.splice(0, this.tasks.length);
  }
  calcCompleted(): void {
    this.completed = 0;
    this.tasks.forEach(task => {
      if (task.isCompleted === true){
        this.completed++;
      }
    });
  }
  returnLeft(): number {
    this.calcCompleted();
    return this.tasks.length - this.completed;
  }
  ngOnInit(): void {
  }
}
