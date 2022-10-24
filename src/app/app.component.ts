import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public newTask: any;
  public refreshedTasks: any;

  public tasks: any = [];

  ngOnInit() {
    this.readTasks();
  }

  public addTask(): void {
    if (!this.newTask) return alert('o buro preenche ai');
    this.tasks.push(this.newTask);
    this.saveTasks();
    this.newTask = '';
  }

  public readTasks(): void {
    this.tasks = JSON.parse(localStorage.getItem('task')!) || [];
  }

  public removeTask(index: number): void {
    this.tasks.splice(index, 1);
    this.saveTasks();
  }

  public saveTasks(): void {
    localStorage.setItem('task', JSON.stringify(this.tasks));
  }
}
