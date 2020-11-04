export class Task {
  constructor(ID, IsCompleted, Description) {
    this.id = ID;
    this.isCompleted = IsCompleted;
    this.taskDescription = Description;
  }
  id: number;
  isCompleted: boolean;
  taskDescription: string;
}
