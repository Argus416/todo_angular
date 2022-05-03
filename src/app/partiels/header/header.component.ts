import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    title: string = 'Task tracker';
    constructor() {}
    toggleAddTask() {
        console.log('toggle add task');
    }
    ngOnInit(): void {}
}