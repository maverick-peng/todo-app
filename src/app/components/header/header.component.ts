import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 px-4 sm:p-3 shadow-lg">
      <h1 class="font-mono text-xl text-white font-bold tracking-wide">Todo App</h1>
    </div>
  `,
  styles: [
  ]
})
export class HeaderComponent {

}
