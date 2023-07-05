import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../core/models/task.model';
import { AbstractControl, FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToggleButtonComponent } from '../shared/toggle-button/toggle-button.component';
import { DeleteButtonComponent } from '../shared/delete-button/delete-button.component';
import { SubjectTodoService } from '../../core/services/subject-todo.service';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToggleButtonComponent, DeleteButtonComponent],
  template: `
    <li class="p-3 shadow-md relative">
      <div class="flex justify-between gap-2">
        <p class="text-ellipsis overflow-hidden"><strong>{{ task.title }}</strong></p>
        <div class="flex items-center gap-2">
          <span *ngIf="task.completed" class="inline-block text-green-400">Done</span>
          <app-toggle-button [ngClass]="{'right': !task.completed}" [formControl]="completedControl"></app-toggle-button>
        </div>
      </div>
      <hr class="my-2">
      <p class="min-h-[0.5rem]">{{ task.descp }}</p>
      <small class="text-gray-500 block mt-2 italic">{{ task.createdAt | date:'yyyy/MM/dd' }} created</small>
      <app-delete-button (clicked)="deleteTask()" class="absolute bottom-3 right-3"></app-delete-button>
    </li>
  `,
  styles: [`
    :host {
      @apply w-full sm:max-w-[400px] bg-slate-100;
    }
    .right {
      @apply ml-auto;
    }
  `]
})
export class TaskItemComponent implements OnInit {

  @Input() task!: Task;

  private todoSrvc = inject(SubjectTodoService);

  fb = inject(FormBuilder);

  completedControl!: FormControl;

  ngOnInit(): void {
    this.completedControl = this.fb.control(this.task.completed);
    this.completedControl.valueChanges.pipe().subscribe(completed => {
      this.updateTask(completed)
    });
  }

  deleteTask() {
    this.todoSrvc.deleteTask(this.task.id).subscribe();
  }

  updateTask(completed: boolean) {
    this.todoSrvc.updateTask({ ...this.task, completed }).subscribe();
  }
}
