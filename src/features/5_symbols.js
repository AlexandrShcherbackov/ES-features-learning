const obj = {};
const sym = Symbol();
obj[sym] = 'foo';
obj.bar = 'bar';

export { obj, sym };