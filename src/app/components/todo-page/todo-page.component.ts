import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from '../task-list/task-list.component';
import { NewTaskComponent } from '../new-task/new-task.component';

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [CommonModule, TaskListComponent, NewTaskComponent],
  template: `
    <!-- search task input -->
    <div class="flex justify-center items-center">
      <div class="w-full sm:max-w-[400px] mx-auto mb-4">
        <label for="search-task" class="sr-only">Search Task</label>
        <input type="text" id="search-task" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Search Task" />
      </div>
    </div>

    <div class="flex justify-center items-center">
      <app-task-list class="w-full"></app-task-list>
    </div>
    <app-new-task class="block w-full sm:max-w-[400px] mx-auto mb-4"></app-new-task>

  `,
  styles: [
  ]
})
export class TodoPageComponent {

}
