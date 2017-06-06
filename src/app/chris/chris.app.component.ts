import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-component',
    styleUrls: [
        './../../../styles/_settings.scss',
        './../../../styles/chris/_chris.settings.scss',
        './../../../styles/_generic.scss',
        './../../../styles/_tools.scss',
        './../../../styles/_elements.scss',
        './../../../styles/_objects.scss',
        './../../../styles/_trumps.scss',
        './../../../styles/chris/_chris.trumps.scss',
    ],
    templateUrl: './chris.app.component.html',
})
export class AppComponent {
}
