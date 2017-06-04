import 'reflect-metadata';

import AboutComponent from './about.component';

describe('AboutComponent', () => {
    describe('test', () => {
        it('returns 1', () => {
            const aboutComponent = new AboutComponent();
            expect(aboutComponent.test()).toBe(1);
        });
    });
});
