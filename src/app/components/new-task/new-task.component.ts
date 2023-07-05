import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SubjectTodoService } from '../../core/services/subject-todo.service';
import { Task } from '../../core/models/task.model';
import { tap } from 'rxjs';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="w-full p-4 shadow-lg">
      <h2 class="text-xl font-bold">New Task</h2>
      <hr class="border-top-2 border-gray-200 my-4">
      <form class="flex flex-col gap-4" [formGroup]="formGroup" (ngSubmit)="handleSubmit()">
        <div>
          <label for="task-name" class="text-gray-700">Task Name</label>
          <input formControlName="title" type="text" id="task-name" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            <small *ngIf="formGroup.controls.title.touched && formGroup.controls.title.invalid" class="text-red-500">This field is required</small>
        </div>
        <div>
          <label for="task-desc" class="text-gray-700">Task Description</label>
          <textarea formControlName="descp" id="task-desc" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
        </div>
        <div>
          <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">Add Task</button>
        </div>
      </form>
    </div>
  `,
  styles: [`
    .ng-invalid.ng-touched {
      @apply border-red-500;
    }
  `]
})
export class NewTaskComponent {

  private todoSrvc = inject(SubjectTodoService);

  private fb = inject(FormBuilder);

  formGroup = this.fb.group({
    title: ['', Validators.required,],
    descp: [''],
  });

  handleSubmit() {
    if (this.formGroup.invalid) return;
    this.todoSrvc.addTask({
      ...this.formGroup.value as unknown as Task,
      completed: false,
      createdAt: new Date(),
      id: new Date().getTime().toString() + Math.ceil(Math.random() * 1000),
    }).pipe(
      tap(() => this.formGroup.reset())
    ).subscribe();
  }
}
