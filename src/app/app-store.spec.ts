import { AppStore } from './app-store';

describe('AppStore', () => {
    let service: AppStore;

    beforeEach(() => {
        service = new AppStore();
    });

    it('should instantiated successfully', () => {
        expect(service).toBeDefined();
    });

    it('should set state correctly', () => {
        let myState = { name: 'test' };
        service.setState(myState);
        expect(service.getState()).toEqual(myState);
    });

    it('should restore to default state correctly', () => {
        let myState = { name: 'test2' };
        service.setState(myState);
        expect(service.getState()).toEqual(myState);
        service.purge();
        expect(service.getState()).toEqual({});
    });
});
