class ApiError extends Error {
    constructor(statusCode, message = "Something Went Wrong!!!", errors = [], stack = "") {
        super(this.message)
        this.statusCode = statusCode
        this.errors = errors
        this.success = false

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError }