exports.main = async function (event, context) {
    return {
        statusCode: 200,
        body: 'Hello World from lambda'
    }
}