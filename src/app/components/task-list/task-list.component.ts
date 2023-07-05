import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { Task } from '../../core/models/task.model';
import { SubjectTodoService } from '../../core/services/subject-todo.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskItemComponent],
  template: `
    <ul class="flex flex-col items-center gap-4 w-full sm:max-w-[400px] mx-auto">
      <app-task-item *ngFor="let task of tasks" [task]="task"></app-task-item>
    </ul>
  `,
  styles: [
  ]
})
export class TaskListComponent {

  @Input() tasks!: Task[];
}
