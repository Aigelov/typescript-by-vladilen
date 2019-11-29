function strip(x: string | number) {
  if (typeof x === 'number') {
    return x.toFixed(2);
  }
  return x.trim();
}
// console.log(strip('Hello'));
// console.log(strip(23));


class MyResponse {
  header = 'Response header';
  result = 'Response result';
}
class MyError {
  header = 'Error header';
  message = 'Error message';
}
function handle(res: MyResponse | MyError) {
  if (res instanceof MyResponse) {
    return {
      info: `Header: ${res.header}. Result: ${res.result}`
    }
  } else {
    return {
      info: `Header: ${res.header}. Message: ${res.message}`
    }
  }
}
const myResponse = new MyResponse();
const myError = new MyError();
// console.log(handle(myResponse));
// console.log(handle(myError));


type AlertType = 'success' | 'danger' | 'warning';
function setAlertType(type: AlertType) {
  console.log(type);
}
setAlertType('success');
setAlertType('danger');
setAlertType('warning');