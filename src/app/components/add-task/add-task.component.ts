import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Task } from '../../Task';
@Component({
    selector: 'app-add-task',
    templateUrl: './add-task.component.html',
    styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
    @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
    text: string = '';
    day: string = '';
    reminder: boolean = false;
    showAddTask: boolean;
    subscription: Subscription;

    constructor(private uiService: UiService) {
        this.subscription = this.uiService
            .onToggle()
            .subscribe((Value) => (this.showAddTask = Value));
    }

    ngOnInit(): void {}

    onSubmit() {
        const newTask: Task = {
            text: this.text,
            day: this.day,
            reminder: this.reminder,
        };

        this.inputValidation(!this.text, 'text');
        this.inputValidation(!this.day, 'day');

        this.text = '';
        this.day = '';
        this.reminder = false;

        this.onAddTask.emit(newTask);
    }

    inputValidation(input: boolean, inputName: string) {
        if (input) {
            alert(`please add a ${inputName}`);
            return;
        }
    }
}
