import { NgModule, Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { CoreModule } from './core.module';

@Component({
    selector: 'as-test',
    template: 'Test'
})
class TestComponent {
}

@NgModule({
    imports: [
        CoreModule
    ],
    declarations: [
        TestComponent
    ],
    exports: [
        TestComponent
    ]
})
class TestModule {
    constructor() {}
}

describe('CoreModule', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                CoreModule,
                TestModule
            ]
        });
    });

    it('should return module providers', () => {
        const moduleWithProviders = CoreModule.forRoot();
        expect(moduleWithProviders).toBeDefined();
    });

    it('should throw error when CoreModule created twice', () => {
        TestBed.createComponent(TestComponent);
    });
});

describe('CoreModule', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                CoreModule,
                TestModule
            ]
        });
    });

    it('should return module providers', () => {
        const moduleWithProviders = CoreModule.forRoot();
        expect(moduleWithProviders).toBeDefined();
    });

    it('should throw error when CoreModule created twice', () => {
        TestBed.createComponent(TestComponent);
        expect(function() {
            new CoreModule({});
        }).toThrowError();
    });
});
