import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ToDo } from "../models/toDo.model";

@Injectable({
  providedIn: 'root'
})
export class ToDoService{


  allToDos: ToDo[] = []
  toDos: ToDo[] = [];
  completedToDos: ToDo[] = [];

  getAllToDos(): ToDo[] {
    return this.toDos;
  }

  getToDoById(toDoId: number): ToDo {
    const toDo = this.toDos.find(toDo => toDo.id === toDoId)
    console.log('id :' + toDoId, ' suite :' + toDo);
      if(!toDo) {
        throw new Error('To Do not Found')
      } else {
        return toDo;
      }
  }

  addToDo(formValue: { title: string, description: string}): void {
    const todo: ToDo = {
      ...formValue,
      id: this.toDos.length < 1 ? 1 : this.toDos[this.toDos.length - 1].id + 1
    };
    this.toDos.push(todo)
    this.allToDos.push(todo)
  }

  onDeleteToDo(todo: ToDo): void {
    console.log(this.toDos);
    let remove: number = this.toDos.indexOf(todo);
    this.toDos.splice(remove, 1);
  }


}
