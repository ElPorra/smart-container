import { Component, OnInit } from '@angular/core';
import {
    faBars,
    faTimes,
} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
    public faBars = faBars;
    public faTimes = faTimes;

    public showBarMenu: boolean = false;
    constructor() {}

    ngOnInit(): void {}
}
