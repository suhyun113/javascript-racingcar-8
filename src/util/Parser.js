export default class Parser {
    static splitNames(raw) {
        if (typeof raw !== 'string') {
            return [];
        }
        return raw.split(',').map(name => name.trim());
    }
}