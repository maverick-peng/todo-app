import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full p-4 shadow-lg">
      <form class="flex flex-col gap-4">
        <div>
          <label for="task-name" class="text-gray-700">Task Name</label>
          <input type="text" id="task-name" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
        </div>
        <div>
          <label for="task-desc" class="text-gray-700">Task Description</label>
          <textarea id="task-desc" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
        </div>
        <div>
          <button type="submit" class="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">Add Task</button>
        </div>
      </form>
    </div>
  `,
  styles: [
  ]
})
export class NewTaskComponent {

}
