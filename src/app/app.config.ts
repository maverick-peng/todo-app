import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { SubjectTodoService } from './core/services/subject-todo.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: APP_INITIALIZER,
      useFactory: (todoSrvc: SubjectTodoService) => () => todoSrvc.loadData(),
      multi: true,
      deps: [SubjectTodoService]
    }
  ]
};
