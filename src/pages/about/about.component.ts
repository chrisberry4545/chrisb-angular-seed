import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'about-component',
    templateUrl: './about.component.html',
    styleUrls: [
        './about.component.scss'
    ],
    encapsulation: ViewEncapsulation.None
})
export default class AboutComponent {
    public test() {
        return 1;
    }
}
