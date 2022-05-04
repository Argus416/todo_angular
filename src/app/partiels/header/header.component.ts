import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    title: string = 'Task tracker';
    showAddTask: boolean = true;
    subscription: Subscription;

    constructor(private uiSerivce: UiService, private router: Router) {
        this.subscription = this.uiSerivce
            .onToggle()
            .subscribe((Value) => (this.showAddTask = Value));
    }

    toggleAddTask() {
        this.uiSerivce.toggleAddTask();
    }

    hasRoute(route: string) {
        return this.router.url === route;
    }
    ngOnInit(): void {}
}
