export interface Task {
  id: string;
  title: string;
  descp: string | null;
  completed: boolean;
  createdAt: Date;
}