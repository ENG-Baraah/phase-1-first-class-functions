function receivesAFunction(cb) {
  cb();
}

function returnsANamedFunction() {
  return function myFunction() {};
}

function returnsAnAnonymousFunction() {
  return function () {};
}
