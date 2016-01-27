module.exports = function (payload, cb) {
    console.log(payload);
    setTimeout(function () {
        cb({"some": "object"});
    }, 2000);
}