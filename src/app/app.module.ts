import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { SingleToDoComponent } from './single-to-do/single-to-do.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewToDoComponent } from './new-to-do/new-to-do.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    HeaderComponent,
    SingleToDoComponent,
    NewToDoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
