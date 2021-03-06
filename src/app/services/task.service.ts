import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from '../Task';
import { TASKS } from '../mock-tasks';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    }),
};
@Injectable({
    providedIn: 'root',
})
export class TaskService {
    private apiUrl = 'http://localhost:5000/tasks';
    constructor(private http: HttpClient) {}

    getTasks(): Observable<Task[]> {
        const tasks = this.http.get<Task[]>(this.apiUrl);
        return tasks;
    }
    newTask(task: Task) {
        const url = `${this.apiUrl}`;
        return this.http.post<Task>(url, task, httpOptions);
    }
    updateTaskReminder(task: Task): Observable<Task> {
        const url = `${this.apiUrl}/${task.id}`;
        return this.http.patch<Task>(url, task, httpOptions);
    }

    deleteTask(task: Task): Observable<Task> {
        const url = `${this.apiUrl}/${task.id}`;
        return this.http.delete<Task>(url);
    }
}
