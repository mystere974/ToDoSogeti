import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToDo } from '../models/toDo.model';
import { ToDoService } from '../services/toDoService';

@Component({
  selector: 'app-new-to-do',
  templateUrl: './new-to-do.component.html',
  styleUrls: ['./new-to-do.component.css']
})
export class NewToDoComponent implements OnInit {


  todoForm!: FormGroup;
  toDoPreview$!: Observable<ToDo>;

  constructor(private fb: FormBuilder,
              private todoService: ToDoService,
              private route: Router) { }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      id: [0],
      title: [null, Validators.required],
      description: [null]
    }, {
      updateOn: 'blur'
    });
    this.toDoPreview$ = this.todoForm.valueChanges;
  };

  onSubmitForm(): void {
    this.todoService.addToDo(this.todoForm.value);
    this.route.navigateByUrl('/');
  }
}
