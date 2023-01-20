export class Todo {
  task: string;
  importance: string;
  isCompleted: boolean;

  constructor(task: string, importance: string) {
    this.task = task;
    this.importance = importance;
    this.isCompleted = false;
  }

  format() {
    return `${this.task} | ${this.importance}`;
  }
}
