const ERROR_INVALID_NAME = "[ERROR] 유효하지 않은 자동차 이름입니다.";
const ERROR_INVALID_TRY_COUNT = "[ERROR] 유효하지 않은 시도 횟수입니다.";

export default class InputValidator {
    static validateNames(names) {
        if (!Array.isArray(names) || names.length === 0) {
            throw new Error(ERROR_INVALID_NAME);
        }

        names.forEach((name) => {
            this._validateSingleName(name);
        });
    }

    static _validateSingleName(name) {
        if (typeof name !== 'string') {
            throw new Error(ERROR_INVALID_NAME);
        }
        const trimmed = name.trim();
        if (trimmed.length === 0) {
            throw new Error(ERROR_INVALID_NAME);
        }
        if (trimmed.length > 5) {
            throw new Error(ERROR_INVALID_NAME);
        }
    }

    static validateTryCount(count) {
        if (!Number.isInteger(count)) {
            throw new Error(ERROR_INVALID_TRY_COUNT);
        }

        if (count < 1) {
            throw new Error(ERROR_INVALID_TRY_COUNT);
        }
    }
}