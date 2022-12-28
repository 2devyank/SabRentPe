
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500

    switch (statusCode) {
        case 400:
            res.json({
                title: "NOT FOUND",
                message: err.message,
                StackTrace: err.stack

            })
            break;
        case 401:
            res.json({
                title: "Unaoutharised",
                message: err.message,
                StackTrace: err.stack
            })
            break;
        case 403:
            res.json({
                title: "Forbidden",
                message: err.message,
                StackTrace: err.stack
            })
            break;
        case 400:
            res.json({
                title: "VALIDATION_ERROR",
                message: err.message,
                StackTrace: err.stack
            })
            break;
        case 500:
            res.json({
                title: "INTERNAL SERVER ERROR",
                message: err.message,
                StackTrace: err.stack
            })
            break;
        default:
            break;
    }
}
module.exports=errorHandler;