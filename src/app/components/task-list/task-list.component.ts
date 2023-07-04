import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskItemComponent],
  template: `
    <ul class="flex flex-col items-center gap-4 w-full sm:max-w-[400px] mx-auto">
      <app-task-item class="w-full sm:max-w-[400px] bg-slate-100"></app-task-item>
      <app-task-item class="w-full sm:max-w-[400px] bg-slate-100"></app-task-item>
      <app-task-item class="w-full sm:max-w-[400px] bg-slate-100"></app-task-item>
    </ul>
  `,
  styles: [
  ]
})
export class TaskListComponent {

}
