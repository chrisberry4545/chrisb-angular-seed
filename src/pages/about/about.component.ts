import { Component } from '@angular/core';

@Component({
    selector: 'about-component',
    styleUrls: [
        './about.component.scss',
    ],
    templateUrl: './about.component.html',
})
export default class AboutComponent {
    public test() {
        return 1;
    }
}
