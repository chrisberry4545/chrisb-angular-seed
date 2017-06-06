import { Component } from '@angular/core';

@Component({
    selector: 'home-component',
    styleUrls: [
        './home.component.scss',
    ],
    templateUrl: './home.component.html',
})
export default class HomeComponent {
    public test() {
        return 1;
    }
}
