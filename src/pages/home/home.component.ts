import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'home-component',
    templateUrl: './home.component.pug',
    styleUrls: [
        './home.component.scss',
    ],
    encapsulation: ViewEncapsulation.None
})
export default class HomeComponent {
    public test() {
        return 1;
    }
}
