import { Injectable, inject } from '@angular/core';
import { StorageService } from './storage.service';
import { BehaviorSubject, delay, tap, timeout, timer } from 'rxjs';
import { Task } from '../models/task.model';

const STORAGE_KEY = 'subjectTodos';

@Injectable({
  providedIn: 'root'
})
export class SubjectTodoService {

  private storageSrvc = inject(StorageService);

  data$ = new BehaviorSubject<Task[]>([]);

  /**
   * Load data from local storage
   * @returns 
   */
  loadData() {
    return timer(500).pipe(
      tap(() => {
        const tasks = this.storageSrvc.get<Task[]>(STORAGE_KEY) || [];
        this.data$.next(tasks);
      })
    )
  }

  addTask(task: Task) {
    const tasks = this.data$.getValue();
    tasks.push(task);
    this.data$.next(tasks);
    // Simulate server communication
    return timer(500).pipe(
      tap(() => {
        this.storageSrvc.set(STORAGE_KEY, tasks);
      })
    );
  }

  updateTask(task: Task) {
    const tasks = this.data$.getValue();
    const index = tasks.findIndex((t) => t.id === task.id);
    tasks[index] = task;
    this.data$.next(tasks);
    // Simulate server communication
    return timer(500).pipe(
      tap(() => {
        this.storageSrvc.set(STORAGE_KEY, tasks);
      })
    );
  }

  deleteTask(id: string) {
    const tasks = this.data$.getValue();
    const index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);
    this.data$.next(tasks);
    // Simulate server communication
    return timer(500).pipe(
      tap(() => {
        this.storageSrvc.set(STORAGE_KEY, tasks);
      })
    );
  }
}
