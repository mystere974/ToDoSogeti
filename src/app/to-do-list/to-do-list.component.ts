import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToDo } from '../models/toDo.model';
import { ToDoService } from '../services/toDoService';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  completedToDos: ToDo[] = [];
  nonCompletedToDos: ToDo[] = [];
  toDos!: ToDo[];
  isComplete: boolean = false;

  constructor(private toDoService: ToDoService,
              private route: Router) { }

  ngOnInit(): void {
    this.toDos = this.toDoService.getAllToDos();
  }

  onViewTodo(id: number): void {
    this.route.navigateByUrl(`todo/${id}`)
  }

  onDeleteToDo(todo: ToDo): void {
    this.toDoService.onDeleteToDo(todo);
    console.log(todo.id);
  }

  completedItem(todo: ToDo) {
    this.isComplete = !this.isComplete;
    if(!this.completedToDos.includes(todo)) {
      this.completedToDos.push(todo);
      this.toDos.splice(this.toDos.indexOf(todo), 1)
    } else {
      this.toDos.push(todo)
      this.completedToDos.splice(this.completedToDos.indexOf(todo), 1)
    }
    console.log(this.completedToDos, this.toDos)
  }


}
