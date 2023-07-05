import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from '../task-list/task-list.component';
import { NewTaskComponent } from '../new-task/new-task.component';
import { SubjectTodoService } from '../../core/services/subject-todo.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, debounceTime, distinctUntilChanged, map, startWith, switchMap, tap } from 'rxjs';
import { Task } from '../../core/models/task.model';

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TaskListComponent, NewTaskComponent],
  template: `
    <!-- search input -->
    <div class="flex justify-center items-center">
      <div class="w-full sm:max-w-[400px] mx-auto mb-4">
        <label for="search-task" class="sr-only">Search Task</label>
        <input [formControl]="searchInput" type="text" id="search-task" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Search Task" />
      </div>
    </div>
    <div class="flex justify-center items-center">
      <app-task-list *ngIf="filteredTasks$ | async; let tasks" [tasks]="tasks" class="w-full"></app-task-list>
    </div>
    <app-new-task class="block w-full sm:max-w-[400px] mx-auto my-4"></app-new-task>
  `,
  styles: [
  ]
})
export class TodoPageComponent {

  private todoSrvc = inject(SubjectTodoService);

  tasks$ = this.todoSrvc.data$;

  searchInput = new FormControl('', { nonNullable: true });

  filteredTasks$ = this.searchInput.valueChanges.pipe(
    startWith(''),
    debounceTime(200),
    distinctUntilChanged(),
    switchMap((search) => this.todoSrvc.data$.pipe(
      map((tasks) => tasks.filter((task) => task.title.toLowerCase().includes(search.toLowerCase()))))
    )
  );
}
