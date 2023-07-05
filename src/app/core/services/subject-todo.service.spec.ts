import { TestBed } from '@angular/core/testing';

import { SubjectTodoService } from './subject-todo.service';

describe('SubjectTodoService', () => {
  let service: SubjectTodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectTodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
