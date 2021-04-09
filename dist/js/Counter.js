export default class Counter {
    constructor() {
        this._value = 1;
    }

    getValue() {
        return this._value;
    }

    incrementValue() {
        this._value += 1;
    }
}