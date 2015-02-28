let first = 'Jane';
let last = 'Doe';

let obj = { first, last };
// Same as:
let obj = { first: first, last: last };

let obj = {
  myMethod(arg0, arg1) {
    //...
  }
};

let propKey = 'foo';
let obj = {
  [propKey]: true,
  ['b'+'ar']: 123
};

let obj = {
  ['h'+'ello']() {
    return 'hi';
  }
};
console.log(obj.hello()); // hi
