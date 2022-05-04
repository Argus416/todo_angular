import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    title: string = 'Task tracker';
    showAddTask: boolean = true;
    subscription: Subscription;

    constructor(private uiSerivce: UiService) {
        this.subscription = this.uiSerivce
            .onToggle()
            .subscribe((Value) => (this.showAddTask = Value));
    }

    toggleAddTask() {
        this.uiSerivce.toggleAddTask();
    }
    ngOnInit(): void {}
}
