function strip(x) {
    if (typeof x === 'number') {
        return x.toFixed(2);
    }
    return x.trim();
}
// console.log(strip('Hello'));
// console.log(strip(23));
var MyResponse = /** @class */ (function () {
    function MyResponse() {
        this.header = 'Response header';
        this.result = 'Response result';
    }
    return MyResponse;
}());
var MyError = /** @class */ (function () {
    function MyError() {
        this.header = 'Error header';
        this.message = 'Error message';
    }
    return MyError;
}());
function handle(res) {
    if (res instanceof MyResponse) {
        return {
            info: "Header: " + res.header + ". Result: " + res.result
        };
    }
    else {
        return {
            info: "Header: " + res.header + ". Message: " + res.message
        };
    }
}
var myResponse = new MyResponse();
var myError = new MyError();
function setAlertType(type) {
    console.log(type);
}
setAlertType('success');
setAlertType('danger');
setAlertType('warning');
