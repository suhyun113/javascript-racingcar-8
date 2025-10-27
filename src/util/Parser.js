export default class Parser {
    static splitNames(raw) {
        if (typeof raw !== 'string') {
            return [];
        }
        return raw.split(',').map(name => name.trim());
    }

    static _parseNumberInput(num) {
        if (Number.isInteger(num)) {
            return num;
        }
        return NaN;
    }

    static _parseStringInput(str) {
        const n = Number.parseInt(str, 10);
        if (Number.isNaN(n)) {
            return NaN;
        }
        return n;
    }

    static toInteger(raw) {
        if (typeof raw === 'number') {
            return this._parseNumberInput(raw);
        }   
        if (typeof raw === 'string') {
            return this._parseStringInput(raw);
        }
        return NaN;
    }
}