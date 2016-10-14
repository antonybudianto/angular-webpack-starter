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
class TestModule {}

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

    it('should not throw error when CoreModule created twice', () => {
        expect(function() {
            TestBed.createComponent(TestComponent);
        }).not.toThrowError();
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

    it('should throw error when CoreModule created twice', () => {
        TestBed.createComponent(TestComponent);

        // mimic lazy loaded own injector
        expect(function() {
            new CoreModule({});
        }).toThrowError();
    });
});
