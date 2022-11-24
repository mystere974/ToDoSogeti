import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDo } from '../models/toDo.model';
import { ToDoService } from '../services/toDoService';

@Component({
  selector: 'app-single-to-do',
  templateUrl: './single-to-do.component.html',
  styleUrls: ['./single-to-do.component.css']
})
export class SingleToDoComponent implements OnInit {

  toDo!: ToDo

  constructor(private route: ActivatedRoute,
              private toDoService: ToDoService) { }

  ngOnInit(): void {
    const toDoId = +this.route.snapshot.params['id'];
    this.toDo = this.toDoService.getToDoById(toDoId);
    console.log(toDoId);

  }

}
