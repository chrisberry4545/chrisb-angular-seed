import 'reflect-metadata';

import HomeComponent from './home.component';

describe('HomeComponent', () => {
    describe('test', () => {
        it('returns 1', () => {
            const homeComponent = new HomeComponent();
            expect(homeComponent.test()).toBe(1);
        });
    });
});
