import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { NewToDoComponent } from './new-to-do/new-to-do.component';
import { SingleToDoComponent } from './single-to-do/single-to-do.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

const routes: Routes = [
  { path: '', component: ToDoListComponent},
  { path: 'todo/:id', component: SingleToDoComponent},
  { path: 'create', component: NewToDoComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
