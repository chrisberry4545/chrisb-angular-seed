import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-component',
    templateUrl: './kite.app.component.html',
    styleUrls: [
        './../../../styles/_settings.scss',
        './../../../styles/kite/_kite.settings.scss',

        './../../../styles/_generic.scss',
        './../../../styles/_tools.scss',
        './../../../styles/_elements.scss',
        './../../../styles/_objects.scss',
        './../../../styles/_trumps.scss'
    ],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
}