export default class Counter {
    constructor() {
        this._value = 1;
    }

    getValue() {
        return this._value;
    }

    increementValue() {
        this._value += 1;
    }
}